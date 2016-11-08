import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';
import {CustomDateComponent} from "./components/customDate/customDate.component";
import {ModalWarningComponent} from "./components/modalWarning/modalWarning.component";
import {SelectAuthorsComponent} from "./components/selectAuthors/selectAuthors.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {AddCoursePage} from "./pages/addCourse/addCourse.component";
import {CourseListPage} from "./pages/courses/courseList.component";
import {EditCoursePage} from "./pages/editCourse/editCourse.component";
import {Home} from "./pages/home/home.component";
import {CourseComponent} from "./pages/courses/course/course.component";
import {SearchRowComponent} from "./pages/courses/searchRow/searchRow.component";
import {LoginComponent} from "./pages/curtain/login/login.component";
import {DurationPipe} from "./pipes/duration.pipe";
import {LoggedInGuard} from "./guards/loggedIn.guard";
import {AbstractService} from "./services/";
import {AuthService} from "./pages/curtain/login/auth.service";
import {CourseService} from "./pages/courses/course/course.service";
import {UserService} from "./services/user.service";
import {AuthorsPipe} from "./pipes/authors.pipe";
import {ModalWarningService} from "./components/modalWarning/modalWarning.service";
import {ModalModule, AlertModule, AlertComponent} from "ng2-bootstrap";
import {BreadcrumbsComponent} from "./components/breadscrumbs/breadcrumbs.component";
import {BreadcrumbService} from "./components/breadscrumbs/breadcrumbs.service";
import {ViewCoursePage} from "./pages/viewCourse";
import {CourseListContainer} from "./pages/courses/courseListContainer.component";
import {ViewCourseContainer} from "./pages/viewCourse/viewCourseContainer.component";
import {CustomAlertComponent} from "./components/alert";
import {CustomAlertService} from "./components/alert/alert.service";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    CustomDateComponent,
    ModalWarningComponent,
    CustomAlertComponent,
    SelectAuthorsComponent,
    NavigationComponent,
    LoginComponent,
    BreadcrumbsComponent,
    CourseListContainer,
    ViewCourseContainer,

    AddCoursePage,
    ViewCoursePage,
    CourseListPage,
      CourseComponent,
      SearchRowComponent,
    EditCoursePage,
    Home,

    DurationPipe,
    AuthorsPipe,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    ModalModule,
    AlertModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,

    LoggedInGuard,

    AbstractService,
    AuthService,
    CourseService,
    UserService,
    ModalWarningService,
    CustomAlertService,
    BreadcrumbService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

