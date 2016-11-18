import {style, animate, transition, state, trigger} from '@angular/core';


export class Animations {
  static page = [
    trigger('routeAnimation', [
      // state('*', style({transform: 'translateX(0)', opacity: 1})),
      // state('login', style({transform: 'translateY(0)'})),
      // state('home', style({transform: 'translateY(0)'})),
      transition('void => login', [
        style({transform: 'translateY(-100%)'}),
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ]),
      transition('login => void',
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
          transform: 'translateY(-100%)'
        }))
      ),
      transition('home => void', [
        style({transform: 'translateY(0)'}),
        animate('0.6s')
      ])
    ])
  ];
}
