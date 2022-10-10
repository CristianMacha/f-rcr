import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vs-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  progress = 0;
  heightVH = window.innerHeight;
  background:string="";
  skipts = [
    {
      skip: 0,
      active: true,
      background: '#ffb800'
    },
    {
      skip: 1,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 2,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 3,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 4,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 5,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 6,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 7,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 8,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 9,
      active: false,
      background: '#ffb800'
    },
    {
      skip: 10,
      active: false,
      background: '#ffb800'
    },
  ];

  panels = {
    id: '',
    createdAt: '',
    skipFullName: {
      title: "Hello, what's your name?",
      fullName: '',
      top: 0,
    },
    skipEmail: {
      title: "what's your email?",
      email: '',
      top: this.heightVH,
    },
    skipOne: {
      title: 'WHERE DO YOU NEED TILE?',
      subTitle: 'PICK ONE OR MANY AREAS',
      top: this.heightVH * 2,
      options: [
        {
          id: 1,
          name: 'BATHROOM',
          selected: false,
        },
        {
          id: 2,
          name: 'KITCHEN',
          selected: false,
        },
        {
          id: 3,
          name: 'EXTERIOR',
          selected: false,
        },
        {
          id: 4,
          name: 'DINNING ROOM',
          selected: false,
        },
        {
          id: 5,
          name: 'HALLWAY',
          selected: false,
        },
        {
          id: 6,
          name: 'OTHER',
          selected: false,
        }
      ]
    },
    skipTwo: {
      title: 'WHAT AREAS NEED TILING WORK?',
      subTitle: 'PICK ONE OR MANY AREAS',
      top: this.heightVH * 3,
      options: [
        {
          id: 1,
          name: 'FLOOR',
          src: 'assets/imgs/Mesa_de_trabajo_18.jpg',
          selected: false,
        },
        {
          id: 2,
          name: 'BACKSPLASH',
          src: 'assets/imgs/Mesa_de_trabajo_19.jpg',
          selected: false,
        },
        {
          id: 3,
          name: 'TUB/SHOWER ENCLOSURE',
          src: 'assets/imgs/Mesa_de_trabajo_16.jpg',
          selected: false,
        },
        {
          id: 4,
          name: 'WALL',
          src: 'assets/imgs/Mesa_de_trabajo_17.jpg',
          selected: false,
        },
        {
          id: 5,
          name: 'OTHER',
          src: 'assets/imgs/LAPIZ.jpg',
          selected: false,
        }
      ]
    },
    skipThree: {
      title: 'HAVE YOU ALREADY PURCHASED THE TILE FOR YOUR PROJECT?',
      subTitle: 'BATHROOM',
      top: this.heightVH * 4,
      options: [
        {
          id: 1,
          name: 'YES',
          selected: false,
        },
        {
          id: 2,
          name: 'NO',
          selected: false,
        }
      ]
    },
    skipFour: {
      title: 'TYPE OF TILE ARE YPU PLANNING TO INSTALL FOR YOUR BATHROOM?',
      subTitle: 'PICK ONE OR MANY AREAS',
      top: this.heightVH * 5,
      options: [
        {
          id: 1,
          name: 'BATHROOM FLOOR',
          materials: [
            {
              id: 1,
              name: 'CERAMIC',
              selected: false
            },
            {
              id: 2,
              name: 'PORCELAIN',
              selected: false
            },
            {
              id: 3,
              name: 'NATURE STONE',
              selected: false
            },
            {
              id: 4,
              name: 'GLASS',
              selected: false
            },
          ], // CERAMIC, PORCELAIN, NATURAL STONE AND GLASS
        },
        {
          id: 2,
          name: 'BATHROOM BACKSPLASH',
          materials: [
            {
              id: 1,
              name: 'CERAMIC',
              selected: false
            },
            {
              id: 2,
              name: 'PORCELAIN',
              selected: false
            },
            {
              id: 3,
              name: 'NATURE STONE',
              selected: false
            },
            {
              id: 4,
              name: 'GLASS',
              selected: false
            },
          ],
        },
        {
          id: 3,
          name: 'BATHROOM WALL',
          materials: [
            {
              id: 1,
              name: 'CERAMIC',
              selected: false
            },
            {
              id: 2,
              name: 'PORCELAIN',
              selected: false
            },
            {
              id: 3,
              name: 'NATURE STONE',
              selected: false
            },
            {
              id: 4,
              name: 'GLASS',
              selected: false
            },
          ],
        },
        {
          id: 4,
          name: 'BATHROOM TUB/SHOWER',
          materials: [
            {
              id: 1,
              name: 'CERAMIC',
              selected: false
            },
            {
              id: 2,
              name: 'PORCELAIN',
              selected: false
            },
            {
              id: 3,
              name: 'NATURE STONE',
              selected: false
            },
            {
              id: 4,
              name: 'GLASS',
              selected: false
            },
          ],
        }
      ]
    },
    skipFive: {
      title: 'DO YOU WANT ANY SPECIAL DESIGN OR PATTERN?',
      top: this.heightVH * 6,
      options: [
        {
          id: 1,
          name: 'YES',
          selected: false,
        },
        {
          id: 2,
          name: 'NO',
          selected: false,
        }
      ]
    },
    skipSix: {
      title: 'APPROXIMATE SQUARE FOOTAGE OF THE AREAS TO BE TILED?',
      top: this.heightVH * 7,
      size: '',
    },
    skipSeven: {
      title: 'PICTURE OF YOU PROJECT',
      subTitle: 'OPTIONAL',
      top: this.heightVH * 8,
      fileName: '',
    },
    skipEight: {
      title: 'ONE MORE THING - WHERE WILL THE PROJECT BE?',
      selected: false,
      previusPage: 7,
      nextPage: 9,
      top: this.heightVH * 9,
      address: ''
    },
    skipNine: {
      title: `RECEIVE A QUOTE IN LESS THAN 24HRS`,
      subTitle: 'THANK YOU!',
      selected: false,
      top: this.heightVH * 10,

    },
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleNext(): void {
    this.progress += 10;

    this.panels.skipFullName.top -= window.innerHeight;
    this.panels.skipEmail.top -= window.innerHeight;
    this.panels.skipOne.top -= window.innerHeight;
    this.panels.skipTwo.top -= window.innerHeight;
    this.panels.skipThree.top -= window.innerHeight;
    this.panels.skipFour.top -= window.innerHeight;
    this.panels.skipFive.top -= window.innerHeight;
    this.panels.skipSix.top -= window.innerHeight;
    this.panels.skipSeven.top -= window.innerHeight;
    this.panels.skipEight.top -= window.innerHeight;
    this.panels.skipNine.top -= window.innerHeight;

  }

  handlePrevious(): void {
    this.progress -= 10;
    this.panels.skipFullName.top += window.innerHeight;
    this.panels.skipEmail.top += window.innerHeight;
    this.panels.skipOne.top += window.innerHeight;
    this.panels.skipTwo.top += window.innerHeight;
    this.panels.skipThree.top += window.innerHeight;
    this.panels.skipFour.top += window.innerHeight;
    this.panels.skipFive.top += window.innerHeight;
    this.panels.skipSix.top += window.innerHeight;
    this.panels.skipSeven.top += window.innerHeight;
    this.panels.skipEight.top += window.innerHeight;
    this.panels.skipNine.top += window.innerHeight;

  }

  topSli1(progreso: number|string): void {
    switch (progreso) {
      case progreso = 0:
        this.progress = 0;
     
        this.panels.skipFullName.top = (window.innerHeight * 0);
        this.panels.skipEmail.top = (window.innerHeight * 1);
        this.panels.skipOne.top = (window.innerHeight * 2);
        this.panels.skipTwo.top = (window.innerHeight * 3);
        this.panels.skipThree.top = (window.innerHeight * 4);
        this.panels.skipFour.top = (window.innerHeight * 5);
        this.panels.skipFive.top = (window.innerHeight * 6);
        this.panels.skipSix.top = (window.innerHeight * 7);
        this.panels.skipSeven.top = (window.innerHeight * 8);
        this.panels.skipEight.top = (window.innerHeight * 9);
        this.panels.skipNine.top = (window.innerHeight * 10);

        break;
      case progreso = 1:
        this.progress = 10;
        this.panels.skipFullName.top = (-window.innerHeight);
        this.panels.skipEmail.top = (window.innerHeight * 0);
        this.panels.skipOne.top = (window.innerHeight * 1);
        this.panels.skipTwo.top = (window.innerHeight * 2);
        this.panels.skipThree.top = (window.innerHeight * 3);
        this.panels.skipFour.top = (window.innerHeight * 4);
        this.panels.skipFive.top = (window.innerHeight * 5);
        this.panels.skipSix.top = (window.innerHeight * 6);
        this.panels.skipSeven.top = (window.innerHeight * 7);
        this.panels.skipEight.top = (window.innerHeight * 8);
        this.panels.skipNine.top = (window.innerHeight * 9);
        break;
      case progreso = 2:

        this.progress = 20;
        this.panels.skipFullName.top = (-window.innerHeight * 2);
        this.panels.skipEmail.top = (-window.innerHeight * 1);
        this.panels.skipOne.top = (window.innerHeight * 0);
        this.panels.skipTwo.top = (window.innerHeight * 1);
        this.panels.skipThree.top = (window.innerHeight * 2);
        this.panels.skipFour.top = (window.innerHeight * 3);
        this.panels.skipFive.top = (window.innerHeight * 4);
        this.panels.skipSix.top = (window.innerHeight * 5);
        this.panels.skipSeven.top = (window.innerHeight * 6);
        this.panels.skipEight.top = (window.innerHeight * 7);
        this.panels.skipNine.top = (window.innerHeight * 8);
        break;
      case progreso = 3:
        this.progress = 30;
        this.panels.skipFullName.top = (-window.innerHeight * 3);
        this.panels.skipEmail.top = (-window.innerHeight * 2);
        this.panels.skipOne.top = (-window.innerHeight * 1);
        this.panels.skipTwo.top = (window.innerHeight * 0);
        this.panels.skipThree.top = (window.innerHeight * 1);
        this.panels.skipFour.top = (window.innerHeight * 2);
        this.panels.skipFive.top = (window.innerHeight * 3);
        this.panels.skipSix.top = (window.innerHeight * 4);
        this.panels.skipSeven.top = (window.innerHeight * 5);
        this.panels.skipEight.top = (window.innerHeight * 6);
        this.panels.skipNine.top = (window.innerHeight * 7);
        break;
      case progreso = 4:
        this.progress = 40;
        this.panels.skipFullName.top = (-window.innerHeight * 4);
        this.panels.skipEmail.top = (-window.innerHeight * 3);
        this.panels.skipOne.top = (-window.innerHeight * 2);
        this.panels.skipTwo.top = (-window.innerHeight * 1);
        this.panels.skipThree.top = (window.innerHeight * 0);
        this.panels.skipFour.top = (window.innerHeight * 1);
        this.panels.skipFive.top = (window.innerHeight * 2);
        this.panels.skipSix.top = (window.innerHeight * 3);
        this.panels.skipSeven.top = (window.innerHeight * 4);
        this.panels.skipEight.top = (window.innerHeight * 5);
        this.panels.skipNine.top = (window.innerHeight * 6);
        break;
      case progreso = 5:
        this.progress = 50;
        this.panels.skipFullName.top = (-window.innerHeight * 5);
        this.panels.skipEmail.top = (-window.innerHeight * 4);
        this.panels.skipOne.top = (-window.innerHeight * 3);
        this.panels.skipTwo.top = (-window.innerHeight * 2);
        this.panels.skipThree.top = (-window.innerHeight * 1);
        this.panels.skipFour.top = (window.innerHeight * 0);
        this.panels.skipFive.top = (window.innerHeight * 1);
        this.panels.skipSix.top = (window.innerHeight * 2);
        this.panels.skipSeven.top = (window.innerHeight * 3);
        this.panels.skipEight.top = (window.innerHeight * 4);
        this.panels.skipNine.top = (window.innerHeight * 5);
        break;
      case progreso = 6:
        this.progress = 60;
        this.panels.skipFullName.top = (-window.innerHeight * 6);
        this.panels.skipEmail.top = (-window.innerHeight * 5);
        this.panels.skipOne.top = (-window.innerHeight * 4);
        this.panels.skipTwo.top = (-window.innerHeight * 3);
        this.panels.skipThree.top = (-window.innerHeight * 2);
        this.panels.skipFour.top = (-window.innerHeight * 1);
        this.panels.skipFive.top = (window.innerHeight * 0);
        this.panels.skipSix.top = (window.innerHeight * 1);
        this.panels.skipSeven.top = (window.innerHeight * 2);
        this.panels.skipEight.top = (window.innerHeight * 3);
        this.panels.skipNine.top = (window.innerHeight * 4);
        break;
      case progreso = 7:
        this.progress = 70;
        this.panels.skipFullName.top = (-window.innerHeight * 7);
        this.panels.skipEmail.top = (-window.innerHeight * 6);
        this.panels.skipOne.top = (-window.innerHeight * 5);
        this.panels.skipTwo.top = (-window.innerHeight * 4);
        this.panels.skipThree.top = (-window.innerHeight * 3);
        this.panels.skipFour.top = (-window.innerHeight * 2);
        this.panels.skipFive.top = (-window.innerHeight * 1);
        this.panels.skipSix.top = (window.innerHeight * 0);
        this.panels.skipSeven.top = (window.innerHeight * 1);
        this.panels.skipEight.top = (window.innerHeight * 2);
        this.panels.skipNine.top = (window.innerHeight * 3);
        break;
      case progreso = 8:
        this.progress = 80;
        this.panels.skipFullName.top = (-window.innerHeight * 8);
        this.panels.skipEmail.top = (-window.innerHeight * 7);
        this.panels.skipOne.top = (-window.innerHeight * 6);
        this.panels.skipTwo.top = (-window.innerHeight * 5);
        this.panels.skipThree.top = (-window.innerHeight * 4);
        this.panels.skipFour.top = (-window.innerHeight * 3);
        this.panels.skipFive.top = (-window.innerHeight * 2);
        this.panels.skipSix.top = (-window.innerHeight * 1);
        this.panels.skipSeven.top = (window.innerHeight * 0);
        this.panels.skipEight.top = (window.innerHeight * 2);
        this.panels.skipNine.top = (window.innerHeight * 3);
        break;
      case progreso = 9:
        this.progress = 90;
        this.panels.skipFullName.top = (-window.innerHeight * 9);
        this.panels.skipEmail.top = (-window.innerHeight * 8);
        this.panels.skipOne.top = (-window.innerHeight * 7);
        this.panels.skipTwo.top = (-window.innerHeight * 6);
        this.panels.skipThree.top = (-window.innerHeight * 5);
        this.panels.skipFour.top = (-window.innerHeight * 4);
        this.panels.skipFive.top = (-window.innerHeight * 3);
        this.panels.skipSix.top = (-window.innerHeight * 2);
        this.panels.skipSeven.top = (-window.innerHeight * 1);
        this.panels.skipEight.top = (window.innerHeight * 0);
        this.panels.skipNine.top = (window.innerHeight * 3);
        break;
      case progreso = 10:
        this.progress = 100;
        this.panels.skipFullName.top = (-window.innerHeight * 10);
        this.panels.skipEmail.top = (-window.innerHeight * 9);
        this.panels.skipOne.top = (-window.innerHeight * 8);
        this.panels.skipTwo.top = (-window.innerHeight * 7);
        this.panels.skipThree.top = (-window.innerHeight * 6);
        this.panels.skipFour.top = (-window.innerHeight * 5);
        this.panels.skipFive.top = (-window.innerHeight * 4);
        this.panels.skipSix.top = (-window.innerHeight * 3);
        this.panels.skipSeven.top = (-window.innerHeight * 2);
        this.panels.skipEight.top = (-window.innerHeight * 1);
        this.panels.skipNine.top = (window.innerHeight * 0);
        break;
    }

  }


  timeRecorsive() {
    /*    setInterval(() => {
         this.hours.subtract(1, 'second');
         this.finalHour = this.hours.format('HH');
         this.finalMinute = this.hours.format('MM');
         this.finalsecond = this.hours.format('ss');
       }, 1000); */
  }

}
