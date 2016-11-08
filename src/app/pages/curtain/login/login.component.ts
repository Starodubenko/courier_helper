import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "./auth.service";
import {FormBuilder} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {LoginResponse} from "./loginResponse.model";
import {onlyLettersAndNumbersValidator} from "../../../validators/onlyLettersAndNumbersValidator";
import {onlyLatinLettersValidator} from "../../../validators/onlyNumbersValidator";
import {BreadcrumbService} from "../../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'login',
  styleUrls: ['./login.style.scss'],
  templateUrl: './login.template.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  rememberMe: boolean = false;
  loginAlert: LoginResponse = null;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService) {
    this.breadcrumbLabels.addLabel(route.snapshot, "log in");
  }

  ngOnInit() {
    this.loginForm = this.fb.group({});

    this.initializeForm()
  }

  logIn() {
    this.authService.logIn(this.username, this.password)
      .subscribe((res:LoginResponse) => {
        if (this.authService.isLoggedIn()) {
          this.router.navigate(['/courses-list'])
        } else {
          this.loginAlert = res;
          this.password = "";
        }
      })
  }

  private initializeForm() {
    this.loginForm = this.fb.group({
      'username': [
        this.username,
        [
          Validators.required,
          onlyLatinLettersValidator,
        ]
      ],
      'password': [
        this.password,
        [
          Validators.required,
          Validators.minLength(4),
          onlyLettersAndNumbersValidator,
        ]
      ]
    })
  }
}
