import { Routes, RouterModule } from '@angular/router';
import {LoggedInGuard} from "./guards/loggedIn.guard";
import {Home} from "./pages/home/home.component";
import {OrdersListPage} from "./pages/orders/orderList.component";
import {OrderViewPage} from "./pages/orders/view/viewOrder.component";
import {NewOrderPage} from "./pages/orders/new/newOrder.component";
import {StatisticsListPage} from "./pages/ststistics/statisticsList.component";
import {StatisticsViewPage} from "./pages/ststistics/view/statisticsView.component";
import {ChiefPage} from "./pages/chief/chief.component";
import {CurtainComponent} from "./pages/curtain/curtain.component";
import {AnimationGuard} from "./guards/animation.guard";

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  {path: 'login', component: CurtainComponent, canActivate: [LoggedInGuard, AnimationGuard]},
  {path: 'home', component: Home, canActivate: [LoggedInGuard, AnimationGuard]},
  {
    path: 'my-orders',
    component: OrdersListPage,
    canActivate: [LoggedInGuard, AnimationGuard],
    children: [
      {path: 'new', component: NewOrderPage, canActivate: [LoggedInGuard]},
      {path: ':id', component: OrderViewPage, canActivate: [LoggedInGuard]},
    ]
  },
  {
    path: 'statistics-list',
    component: StatisticsListPage,
    canActivate: [LoggedInGuard],
    children: [
      {path: ':id', component: StatisticsViewPage, canActivate: [LoggedInGuard]},
    ]
  },
  {
    path: 'chief',
    component: ChiefPage,
    canActivate: [LoggedInGuard],
    // children: [
    //   {path: ':id', component: OrderStatisticsVie canActivate: [LoggedInGuard]},
    // ]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];
