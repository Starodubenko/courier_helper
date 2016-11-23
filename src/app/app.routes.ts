import {Routes} from '@angular/router';

import {LoggedInGuard} from "./guards/loggedIn.guard";
import {LoginComponent} from "./pages/curtain/login/login.component";
import {Home} from "./pages/home/home.component";
import {OrdersListPage} from "./pages/orders/orderList.component";
import {OrderViewPage} from "./pages/orders/view/viewOrder.component";
import {NewOrderPage} from "./pages/orders/new/newOrder.component";
import {StatisticsListPage} from "./pages/ststistics/statisticsList.component";
import {StatisticsViewPage} from "./pages/ststistics/view/statisticsView.component";
import {ChiefPage} from "./pages/chief/chief.component";
import {CurtainComponent} from "./pages/curtain/curtain.component";


export const ROUTES: Routes = [
  {path: 'login', component: CurtainComponent, canActivate: [LoggedInGuard]},
  {path: 'home', component: Home, canActivate: [LoggedInGuard]},
  {
    path: 'my-orders',
    component: OrdersListPage,
    canActivate: [LoggedInGuard],
    children: [
      {path: ':id', component: OrderViewPage, canActivate: [LoggedInGuard]},
      {path: 'new', component: NewOrderPage, canActivate: [LoggedInGuard]},
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

// {
//   path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => comp.default),
// },
// { path: '**',    component: NoContentComponent },
