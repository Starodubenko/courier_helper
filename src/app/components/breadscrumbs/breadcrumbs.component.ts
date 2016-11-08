import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {BreadcrumbService} from './breadcrumbs.service';

@Component({
  selector: 'breadcrumbs',
  template: `
    <ul class="breadcrumb">
      <li>
        <a [routerLink]="['/']">Courses</a>
      </li>
      <li *ngFor="let segment of segments; let last = last; let index = index;" [ngClass]="{'active': last}">
        <a *ngIf="!last" [routerLink]="getNavigationURL(segment)">{{ getRouteName(segment) }}</a>
        <span *ngIf="last">{{ getRouteName(segment, index) }}</span>
      </li>
    </ul>`,
  styleUrls: [
    './breadcrumbs.scss'
  ],
})
export class BreadcrumbsComponent {
  private segments: ActivatedRoute[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService) {
    this.segments = new Array();
    this.router.events
      .subscribe(this.routeChanged.bind(this));
  }

  routeChanged(event: any) {
    if (event instanceof NavigationEnd) {
      this.segments.length = 0;
      this.generateBreadcrumbTrail(this.router.routerState.root);
    }
  }

  generateBreadcrumbTrail(route: ActivatedRoute): void {
    let childrenRoutes = route.children;
    childrenRoutes.forEach(childRoute => {
      if (childRoute.outlet === 'primary' && childRoute.snapshot.url.length > 0) {
        this.segments.push(childRoute);
        this.generateBreadcrumbTrail(childRoute);
      }
    });
  }

  getNavigationURL(route: ActivatedRoute): string {
    let routeHierarchy = route.pathFromRoot;
    let url = '';
    routeHierarchy.forEach((parentRoute: ActivatedRoute) => {
      if (parentRoute.snapshot.url.length > 0) {
        url += '/' + parentRoute.snapshot.url.map(segment => segment.path).join('/');
      }
    });
    return url;
  }

  getRouteName(route: ActivatedRoute): string {
    return this.breadcrumbLabels.getLabel(route.snapshot);
  }
}
