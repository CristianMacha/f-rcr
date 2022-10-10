import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FormService, StorageService } from '@core/services';
import * as moment from 'moment';
import { nanoid } from 'nanoid';

@Component({
  selector: 'vs-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  loadingSend = false;
  hours = moment().hour(23).minutes(59).second(59);
  finalHour = '';
  finalMinute = '';
  finalsecond = '';

  imgPosition = {
    left: '-120px',
    right: '',
    bottom: '0',
    scale: 'scaleX(1)',
  }

  imgLogo = {
    right: '20px',
    left: ''
  }

  inputFile = 'No file selected';
  file!: File;

  s6formControl = new FormControl('LESS THAN 25 (SMALL)');
  s8locationFormControl = new FormControl('');
  s9InfoFormGroup = new UntypedFormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  skipts = [
    {
      skip: 1,
      active: true,
    },
    {
      skip: 2,
      active: false,
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
    id: '',
    createdAt: '',
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
      title: 'PICTURE OF YOUR PROJECT',
      subTitle: 'OPTIONAL',
      selected: false,
      previusPage: 6,
      nextPage: 8,
      fileName: '',
    },
    skipEight: {
      title: 'ONE MORE THING - WHERE WILL THE PROJECT BE?',
      selected: false,
      previusPage: 7,
      nextPage: 9,
      address: ''
    },
    skipNine: {
      title: `LET'S GET YOUR A QUOTE!`,
      selected: false,
      previusPage: 8,
      nextPage: 10,
      firstName: '',
      lastName: '',
      email: '',
    },
    skipTen: {
      title: `RECEIVE A QUOTE IN LESS THAN 24HRS`,
      subTitle: 'THANK YOU!',
      selected: false,
      previusPage: 9,
    },
  }

  constructor(
    private storageService: StorageService,
    private formService: FormService,
  ) {
    this.s6formControl.valueChanges.subscribe((resp: any) => this.skipSix.size = resp);
    this.s8locationFormControl.valueChanges.subscribe((resp: any) => this.skipEight.address = resp);
    this.s9InfoFormGroup.valueChanges.subscribe((resp: any) => {
      this.skipNine.firstName = resp.firstName;
      this.skipNine.lastName = resp.lastName;
      this.skipNine.email = resp.email;
    })
   }

  ngOnInit(): void {
    this.setPositionImg();
    this.timeRecorsive();
  }

  get skiptTwo() {
    return this.formRcr.skipTwo;
  }

  get skipThree() {
    return this.formRcr.skipThree;
  }

  get skipFour() {
    return this.formRcr.skipFour;
  }

  get skipFive() {
    return this.formRcr.skipFive;
  }

  get skipSix() {
    return this.formRcr.skipSix;
  }

  get skipSeven() {
    return this.formRcr.skipSeven;
  }

  get skipEight() {
    return this.formRcr.skipEight;
  }

  get skipNine() {
    return this.formRcr.skipNine;
  }

  get skipTen() {
    return this.formRcr.skipTen;
  }

  handleSendForm() {
    this.loadingSend = true;
    if(this.s9InfoFormGroup.invalid) {
      alert('Incomplete information');
      this.loadingSend = false;
    } else {
      this.formRcr.id = nanoid();
      this.formRcr.createdAt = moment().format().toString(),
      this.formService.createForm(this.formRcr)
        .then(() => {
          this.loadingSend = false;
          this.uploadFile();
        })
    }
  }

  uploadFile() {
    this.loadingSend = true;
    this.storageService.uploadFormFile(this.skipSeven.fileName, this.file)
      .then(() => this.handleNextPage(10))
      .catch((e) => console.error(e))
      .finally(() => {
        this.handleNextPage(10)
        this.loadingSend = false;
      });
  }

  selectFile(event: any) {
    if(event.target.files.length > 0) {
      const fileTem = (event.target.files[0] as File);
      const size = (fileTem.size / 1024) / 1024;
      if(size > 10.6) { return }

      this.file = fileTem;
      this.inputFile = this.file.name;
      this.skipSeven.fileName = nanoid();
    }
  }

  handleSelectOptionSkipFive(optionId: number) {
    this.skipFive.options.forEach((o) => o.selected = false);
    const index = this.skipFive.options.findIndex((o) => o.id == optionId);
    this.skipFive.options[index].selected = !this.skipFive.options[index].selected;
  }

  handleSelectOptionSkipFour(optionId: number, materialId: number) {
    const indexOption = this.skipFour.options.findIndex((o) => o.id == optionId);
    const indexMaterial = this.skipFour.options[indexOption].materials.findIndex((m) => m.id == materialId);
    this.skipFour.options[indexOption].materials[indexMaterial].selected = !this.skipFour.options[indexOption].materials[indexMaterial].selected;
  }

  handleSelectOptionSkipThree(optionId: number) {
    this.skipThree.options.forEach((o) => o.selected = false);
    const index = this.skipThree.options.findIndex((o) => o.id == optionId);
    this.skipThree.options[index].selected = !this.skipThree.options[index].selected;
  }

  handleSelectOptionSkipTwo(optionId: number) {
    const index = this.skiptTwo.options.findIndex((o) => o.id == optionId);
    this.skiptTwo.options[index].selected = !this.skiptTwo.options[index].selected;
  }

  handleSelectOptionSkipOne(optionId: number) {
    const index = this.formRcr.skipOne.options.findIndex((o) => o.id == optionId);
    this.formRcr.skipOne.options[index].selected = !this.formRcr.skipOne.options[index].selected
    console.log(this.formRcr.skipOne.options[index].selected);
    ;
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

    if(skip.skip%2 == 1) {
      this.imgPosition = {
        right: '0',
        bottom: '0',
        left: '-120px',
        scale: 'scaleX(1)'
      }
      this.imgLogo = {
        left: '',
        right: '20px'
      }
    } else {
      this.imgPosition = {
        right: '-120px',
        bottom: '0px',
        left: '',
        scale: 'scaleX(-1)'
      }

      this.imgLogo = {
        left: '20px',
        right: ''
      }
    }
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
