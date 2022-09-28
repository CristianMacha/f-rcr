import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vs-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  imgPosition = {
    left: '-120px',
    right: '',
    bottom: '0',
    scale: 'scaleX(1)',
  }

  skipts = [
    {
      skip: 1,
      active: false,
    },
    {
      skip: 2,
      active: true,
    },
    {
      skip: 3,
      active: false,
    },
    {
      skip: 4,
      active: false,
    },
    {
      skip: 5,
      active: false,
    },
    {
      skip: 6,
      active: false,
    },
    {
      skip: 7,
      active: false,
    },
    {
      skip: 8,
      active: false,
    },
    {
      skip: 9,
      active: false,
    },
    {
      skip: 10,
      active: false,
    },
  ];

  formRcr = {
    id: null,
    skipOne: {
      title: 'WHERE DO YOU NEED TILE?',
      subTitle: 'PICK ONE OR MANY AREAS',
      selected: false,
      previusPage: null,
      nextPage: 2,
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
      selected: true,
      previusPage: 1,
      nextPage: 3,
      options: [
        {
          id: 1,
          name: 'FLOOR',
          src: 'assets/imgs/Mesa_de_trabajo_16.jpg',
          selected: false,
        },
        {
          id: 2,
          name: 'BACKSPLASH',
          src: 'assets/imgs/Mesa_de_trabajo_17.jpg',
          selected: false,
        },
        {
          id: 3,
          name: 'TUB/SHOWER ENCLOSURE',
          src: 'assets/imgs/Mesa_de_trabajo_18.jpg',
          selected: false,
        },
        {
          id: 4,
          name: 'WALL',
          src: 'assets/imgs/Mesa_de_trabajo_19.jpg',
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
      selected: false,
      previusPage: 2,
      nextPage: 4,
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
      selected: false,
      previusPage: 3,
      nextPage: 5,
      options: [
        {
          id: 1,
          name: 'BATHROOM FLOOR',
          material: null, // CERAMIC, PORCELAIN, NATURAL STONE AND GLASS
        },
        {
          id: 2,
          name: 'BATHROOM BACKSPLASH',
          material: null,
        },
        {
          id: 3,
          name: 'BATHROOM WALL',
          material: null,
        },
        {
          id: 4,
          name: 'BATHROOM TUB/SHOWER',
          material: null,
        }
      ]
    },
    skipFive: {
      title: 'DO YOU WANT ANY SPECIAL DESIGN OR PATTERN',
      selected: false,
      previusPage: 4,
      nextPage: 6,
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
      selected: false,
      previusPage: 5,
      nextPage: 7,
      size: '',
    },
    skipSeven: {
      title: 'PICTURE OF YOU PROJECT',
      subTitle: 'OPTIONAL',
      selected: false,
      previusPage: 6,
      nextPage: 8,
      fileName: null,
    },
    skipEight: {
      title: 'ONE MORE THING - WHERE WILL THE PROJECT BE?',
      selected: false,
      previusPage: 7,
      nextPage: 9,
      address: null
    },
    skipNine: {
      title: `LET'S GET YOU A QUOTE!`,
      selected: false,
      previusPage: 8,
      nextPage: 10,
      firstName: null,
      lastName: null,
    },
    skipTen: {
      title: `RECEIVE A QUOTE IN LESS THAN 24HRS`,
      subTitle: 'THANK YOU!',
      selected: false,
      previusPage: 9,
      firstName: null,
      lastName: null,
    },
  }

  constructor() { }

  ngOnInit(): void {
    this.setPositionImg();
  }

  handleSelectOptionSkipOne(optionId: number) {
    const index = this.formRcr.skipOne.options.findIndex((o) => o.id == optionId);
    this.formRcr.skipOne.options[index].selected = !this.formRcr.skipOne.options[index].selected;
  }

  handlePreviousPage(previusPage: number) {
    let skiptIndex = this.skipts.findIndex((s) => s.skip == previusPage);
    this.skipts[skiptIndex].active = true;
    const currentPage = ++previusPage;
    let nextSkipIndex = this.skipts.findIndex((s) => s.skip == currentPage);
    this.skipts[nextSkipIndex].active = false;

    this.setPositionImg();
  }

  handleNextPage(nextPage: number) {
    const previusPage = nextPage - 1;
    let skiptIndex = this.skipts.findIndex((s) => s.skip == previusPage);
    this.skipts[skiptIndex].active = false;

    let nextSkipIndex = this.skipts.findIndex((s) => s.skip == nextPage);
    this.skipts[nextSkipIndex].active = true;

    this.setPositionImg();
  }

  setPositionImg() {
    const index = this.skipts.findIndex((s) => s.active == true);
    const skip = this.skipts[index];

    if(skip.skip/2 == 1) {
      this.imgPosition = {
        right: '-120px',
        bottom: '0px',
        left: '',
        scale: 'scaleX(-1)'
      }
    } else {
      this.imgPosition = {
        right: '0',
        bottom: '0',
        left: '-120px',
        scale: 'scaleX(1)'
      }
    }
  }
}
