import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {Course} from "./course.model";
import {User} from "../../../model/user.model";
import {SelectOption} from "../../../components/selectAuthors/selectOption.model";
import {Location} from "@angular/common";
import {ModalWarningService} from "../../../components/modalWarning/modalWarning.service";
import {atLeastOneItemInArray} from "../../../validators/atLeastOneItemInArray";


@Component({
  selector: 'course',
  styleUrls: ['./course.style.scss'],
  templateUrl: './course.template.html'
})
export class CourseComponent {

  @Input('course')
  course: Course = new Course();

  @Input('authorsCandidates')
  authorsCandidates: User[];

  @Input('isBlank')
  isBlank: boolean;

  @Input('isViewMode')
  isViewMode: boolean;

  @Output('edit')
  editEvent = new EventEmitter();

  @Output('delete')
  deleteEvent = new EventEmitter();

  @Output('add')
  addEvent = new EventEmitter();

  courseForm: FormGroup;

  private title: string;
  private description: string;
  private date: Date;
  private duration: number;
  private authorsIDs: number[];

  constructor(private fb: FormBuilder,
              private location: Location,
              private modalWarningService: ModalWarningService){

  }

  ngOnInit() {
    this.courseForm = this.fb.group({});
    if (this.course){
      this.fillData();
    }
    this.initializeForm();
  }

  private initializeForm() {
    this.courseForm = this.fb.group({
      'title': [
        this.title,
        [
          Validators.required,
        ]
      ],
      'description': [
        this.description,
        [
          Validators.required
        ]
      ],
      'date': [
        this.date,
        [
          Validators.required
        ]
      ],
      'duration': [
        this.duration,
        [
          Validators.required
        ]
      ],
      'authorsIDs': [
        this.authorsIDs,
        [
          atLeastOneItemInArray
        ]
      ]
    })
  }

  private fillData(){
    this.title = this.course.title;
    this.date = this.course.date;
    this.description = this.course.description;
    this.duration = this.course.duration;
    this.authorsIDs = this.getSelectedAuthorsIDs(this.course.authors);
  }

  edit(){
    this.editEvent.emit({courseId: this.course.id, changes: this.courseForm.value});
  }

  add(){
    this.addEvent.emit({data: this.courseForm.value});
  }

  delete(){
    let self = this;
    this.modalWarningService.showWarning(
      "Delete course",
      "Are you sure you want to delete course?",
      function () {
        self.deleteEvent.emit({courseId: self.course.id, changes: {deleted: true}});
      }
    );
  }

  cancel(){
    this.location.back();
  }

  mapUsersToOptions(users){
    return users ? users.map(user => new SelectOption(user.id, user.firstName + "" + user.lastName)): [];
  }

  setSelectedCandidates(candidates){
    this.authorsIDs = candidates;
  }

  getSelectedAuthorsIDs(selectedAuthors: User[]){
    return selectedAuthors.map(user => user.id);
  }
}
