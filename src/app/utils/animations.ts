/**
 * 导航动画
 */
import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

// Routable animations
export const routeAnimation =
  [
    trigger('routeAnimation', [
      transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', style({
          position: 'absolute', top: 0, left: 0, width: '100%'
        })),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100px)', opacity: 0 }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'none' })),
            animateChild()
          ]),
        ])
      ]),
    ])
  ];
export const appAnimation =
  [
    trigger('loadingAnimation', [
      transition(':enter', [
        query('.text', [
          style({ marginTop: '-200px' }),
          animate('1500ms cubic-bezier(.26,1.96,.58,.61)', style({ marginTop: '0px' }))
        ])
      ]),
      transition(':leave', [
        query('.text', [
          animate('800ms ease-out', style({ opacity: '0' }))
        ]),
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ];