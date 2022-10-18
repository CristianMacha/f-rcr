import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const transitionAnimation = animation(
  trigger(
    'transitionAnimation',
    [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]
  )
);
