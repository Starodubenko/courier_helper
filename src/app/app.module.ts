import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import {CustomDateComponent} from "./components/customDate/customDate.component";
import {ModalWarningComponent} from "./components/modalWarning/modalWarning.component";
import {CustomAlertComponent} from "./components/alert/alert.component";
import {SelectAuthorsComponent} from "./components/selectAuthors/selectAuthors.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {CurtainComponent} from "./pages/curtain/curtain.component";
import {LoginComponent} from "./pages/curtain/login/login.component";
import {BreadcrumbsComponent} from "./components/breadscrumbs/breadcrumbs.component";
import {CourseListContainer} from "./pages/courses/courseListContainer.component";
import {ViewCourseContainer} from "./pages/viewCourse/viewCourseContainer.component";
import {AddCoursePage} from "./pages/addCourse/addCourse.component";
import {ViewCoursePage} from "./pages/viewCourse/viewCourse.component";
import {CourseListPage} from "./pages/courses/courseList.component";
import {CourseComponent} from "./pages/courses/course/course.component";
import {NewOrderPage} from "./pages/orders/new/newOrder.component";
import {SearchRowComponent} from "./pages/courses/searchRow/searchRow.component";
import {EditCoursePage} from "./pages/editCourse/editCourse.component";
import {Home} from "./pages/home/home.component";
import {OrdersListPage} from "./pages/orders/orderList.component";
import {OrderViewPage} from "./pages/orders/view/viewOrder.component";
import {StatisticsListPage} from "./pages/ststistics/statisticsList.component";
import {StatisticsViewPage} from "./pages/ststistics/view/statisticsView.component";
import {ChiefPage} from "./pages/chief/chief.component";
import {DurationPipe} from "./pipes/duration.pipe";
import {AuthorsPipe} from "./pipes/authors.pipe";
import {LoggedInGuard} from "./guards/loggedIn.guard";
import {AbstractService} from "./services/abstract.sevice";
import {AuthService} from "./pages/curtain/login/auth.service";
import {CourseService} from "./pages/courses/course/course.service";
import {UserService} from "./services/user.service";
import {ModalWarningService} from "./components/modalWarning/modalWarning.service";
import {CustomAlertService} from "./components/alert/alert.service";
import {BreadcrumbService} from "./components/breadscrumbs/breadcrumbs.service";
import {LeftSidebarService} from "./components/leftSlideNav/leftSideBar.service";
import {MaterialModule} from "@angular/material";
// import {ModalModule, AlertModule} from "ng2-bootstrap";
import {NavigationService} from "./components/navigation/navigation.service";
import {AnimationGuard} from "./guards/animation.guard";
import {LeftSlideNavComponent} from "./components/leftSlideNav/leftSlideNav.component";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    CustomDateComponent,
    ModalWarningComponent,
    CustomAlertComponent,
    SelectAuthorsComponent,
    NavigationComponent,
    LeftSlideNavComponent,
    CurtainComponent,
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
    OrdersListPage,
    NewOrderPage,
    OrderViewPage,
    StatisticsListPage,
    StatisticsViewPage,
    ChiefPage,

    DurationPipe,
    AuthorsPipe
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule,
    MaterialModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,

    LoggedInGuard,
    AnimationGuard,

    AbstractService,
    AuthService,
    CourseService,
    UserService,
    ModalWarningService,
    CustomAlertService,
    BreadcrumbService,
    LeftSidebarService,
    NavigationService
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

