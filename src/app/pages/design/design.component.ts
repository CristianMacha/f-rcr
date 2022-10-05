import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormService, StorageService } from '@core/services';
import * as moment from 'moment';

@Component({
  selector: 'vs-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  progress = 0;
  hours = moment().hour(23).minutes(59).second(59);
  finalHour = '';
  finalMinute = '';
  finalsecond = '';
  heightVH = window.innerHeight;
  s1FullNameFormGroup = new FormControl('');
  s2EmailFormGroup = new FormControl('');

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

  constructor(private storageService: StorageService,
    private formService: FormService,) {
    this.s1FullNameFormGroup.valueChanges.subscribe((resp: any) => this.skipFullName.fullName = resp);
    this.s2EmailFormGroup.valueChanges.subscribe((resp: any) => this.skipEmail.email = resp);


  }

  ngOnInit(): void {
    this.timeRecorsive();
  }

  get skipFullName() {
    return this.panels.skipFullName;
  }

  get skipEmail() {
    return this.panels.skipEmail;
  }

  handleSelectOptionSkipOne(optionId: number) {
    const index = this.panels.skipOne.options.findIndex((o) => o.id == optionId);
    this.panels.skipOne.options[index].selected = !this.panels.skipOne.options[index].selected
    console.log(this.panels.skipOne.options[index].selected);
    ;
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
  timeRecorsive() {
    setInterval(() => {
      this.hours.subtract(1, 'second');
      this.finalHour = this.hours.format('HH');
      this.finalMinute = this.hours.format('MM');
      this.finalsecond = this.hours.format('ss');
    }, 1000);
  }
}
