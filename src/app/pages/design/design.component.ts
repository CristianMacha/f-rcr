import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IOption } from '@core/interfaces';
import { FormService, StorageService } from '@core/services';
import * as moment from 'moment';
import { nanoid } from 'nanoid';

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

  s6formControl = new FormControl('LESS THAN 25 (SMALL)');
  s8locationFormControl = new FormControl('');

  inputFile = 'No file selected';
  file!: File;

  loadingSend: boolean = false;

  formData = {
    id: '',
    createdAt: '',
    oneStep: {
      title: `HELLO, WHAT'S YOUR NAME?`,
      id: 1,
      name: '',
      filled: false,
      top: 0,
      order: 1,
    },
    twoStep: {
      id: 2,
      title: `WHAT'S YOUR EMAIL?`,
      email: '',
      filled: false,
      top: this.heightVH,
      order: 2,
    },
    threeStep: {
      id: 3,
      title: `WHERE DO YOUR NEED TILE?`,
      description: `PICK ONE OR MANY AREAS`,
      filled: false,
      top: this.heightVH * 2,
      order: 3,
      areas: [
        {
          id: 1,
          name: 'BATHROOM',
          selected: false,
          areas: [
            {
              id: 1,
              name: 'floor',
              image: 'assets/imgs/bathroom_1.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 2,
              name: 'backsplash',
              image: 'assets/imgs/bathroom_2.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 3,
              name: 'tub/shower',
              image: 'assets/imgs/bathroom_3.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 4,
              name: 'wall',
              image: 'assets/imgs/bathroom_4.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
          ]
        },
        {
          id: 2,
          name: 'KITCHEN',
          selected: false,
          areas: [
            {
              id: 1,
              name: 'kitchen_1',
              image: 'assets/imgs/kitchen_1.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 2,
              name: 'kitchen_2',
              image: 'assets/imgs/kitchen_2.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 3,
              name: 'floor',
              image: 'assets/imgs/kitchen_3.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 4,
              name: 'kitchen_4',
              image: 'assets/imgs/kitchen_4.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
          ]
        },
        {
          id: 3,
          name: 'EXTERIOR',
          selected: false,
          areas: [
            {
              id: 1,
              name: 'exterior_1',
              image: 'assets/imgs/exterior_1.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 2,
              name: 'exterior_2',
              image: 'assets/imgs/exterior_2.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 3,
              name: 'exterior_3',
              image: 'assets/imgs/exterior_3.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
          ]
        },
        {
          id: 4,
          name: 'DINNING ROOM',
          selected: false,
          areas: [
            {
              id: 1,
              name: 'table',
              image: 'assets/imgs/dinning_room_1.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 2,
              name: 'dinning_room_2',
              image: 'assets/imgs/dinning_room_2.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 3,
              name: 'floor',
              image: 'assets/imgs/dinning_room_3.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
          ]
        },
        {
          id: 5,
          name: 'HALLWAY',
          selected: false,
          areas: [
            {
              id: 1,
              name: 'hallway_1',
              image: 'assets/imgs/hallway_1.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 2,
              name: 'wall',
              image: 'assets/imgs/hallway_2.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 3,
              name: 'hallway_3',
              image: 'assets/imgs/hallway_3.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
            {
              id: 4,
              name: 'floor',
              image: 'assets/imgs/hallway_4.jpg',
              selected: false,
              tiles: [
                {
                  id: 1,
                  name: 'CERAMIC',
                  selected: false,
                },
                {
                  id: 2,
                  name: 'PORCELAIN',
                  selected: false,
                },
                {
                  id: 3,
                  name: 'NATURE STONE',
                  selected: false,
                },
                {
                  id: 4,
                  name: 'GLASS',
                  selected: false,
                }
              ]
            },
          ]
        },
      ]
    },
    fourStep: {
      id: 4,
      title: 'WHAT AREAS NEED TILING WORK?',
      description: 'PICK ONE OR MANY AREAS',
      top: this.heightVH * 3,
      order: 4,
    },
    fiveStep: {
      id: 5,
      title: 'HAVE YOUR ALREADY PURCHASED THE TILE FOR YOUR PROJECT?',
      description: '',
      haveTile: false,
      top: this.heightVH * 4,
      order: 5,
    },
    sixStep: {
      id: 6,
      title: 'HAVE YOUR ALREADY PURCHASED THE TILE FOR YOUR PROJECT?',
      description: 'PICK ONE OR MANY AREAS',
      top: this.heightVH * 5,
      order: 6,
    },
    sevenStep: {
      id: 7,
      title: 'DO YOUR WANT ANY SPECIAL DESIGN OR PATTERN?',
      hasDesign: false,
      top: this.heightVH * 6,
      order: 8,
    },
    eightStep: {
      id: 8,
      title: 'APPROXIMATE SQUARE FOOTAGE OF THE AREAS TO BE TILED?',
      value: 'LESS THAN 25 (SMALL)',
      top: this.heightVH * 7,
      order: 9,
    },
    nineStep: {
      id: 9,
      title: 'PICTURE OF YOUR PROJECT',
      image: '',
      top: this.heightVH * 8,
      order: 10,
    },
    tenStep: {
      id: 10,
      title: 'ONE MORE THING - WHERE WILL THE PROJECT BE?',
      address: '',
      top: this.heightVH * 9,
      order: 11,
    },
    finalStep: {
      title: `RECEIVE A QUOTE IN LESS THAN 24HRS`,
      subTitle: 'THANK YOU!',
      top: this.heightVH * 10,
      order: 12,
    }
  }

  constructor(
    private storageService: StorageService,
    private formService: FormService,
  ) {
    this.s6formControl.valueChanges.subscribe((resp: any) => this.eightStep.value = resp);
    this.s8locationFormControl.valueChanges.subscribe((resp: any) => this.tenStep.address = resp);
  }

  ngOnInit(): void {
    this.timeRecorsive();
  }

  get oneStep() {
    return this.formData.oneStep;
  }

  get twoStep() {
    return this.formData.twoStep;
  }

  get threeStep() {
    return this.formData.threeStep;
  }

  get fourStep() {
    return this.formData.fourStep;
  }

  get fiveStep() {
    return this.formData.fiveStep;
  }

  get sixStep() {
    return this.formData.sixStep;
  }

  get sevenStep() {
    return this.formData.sevenStep;
  }

  get eightStep() {
    return this.formData.eightStep;
  }

  get nineStep() {
    return this.formData.nineStep;
  }

  get tenStep() {
    return this.formData.tenStep;
  }

  get finalStep() {
    return this.formData.finalStep;
  }

  handleSelectOptionSkipOne(optionId: number) {
    const index = this.threeStep.areas.findIndex((area) => area.id == optionId);
    this.threeStep.areas[index].selected = !this.threeStep.areas[index].selected;
  }

  handleSelectOptionArea(areaId: number, tileId: number) {
    const areaIndex = this.threeStep.areas.findIndex((a) => a.id == areaId);
    const index = this.threeStep.areas[areaIndex].areas.findIndex((a) => a.id == tileId);
    this.threeStep.areas[areaIndex].areas[index].selected = !this.threeStep.areas[areaIndex].areas[index].selected;
  }

  fiveHandleClick(active: boolean) {
    this.fiveStep.haveTile = active;
  }

  handleSelectTile(areaId: number, subAreaId: number, tileId: number) {
    const areaIndex = this.threeStep.areas.findIndex((a) => a.id == areaId);
    const subAreaIndex = this.threeStep.areas[areaIndex].areas.findIndex((a) => a.id == subAreaId);
    const tileIndex = this.threeStep.areas[areaIndex].areas[subAreaIndex].tiles.findIndex((m) => m.id == tileId);
    this.threeStep.areas[areaIndex].areas[subAreaIndex].tiles[tileIndex].selected = !this.threeStep.areas[areaIndex].areas[subAreaIndex].tiles[tileIndex].selected;
  }

  seventHandleClick(active: boolean) {
    this.sevenStep.hasDesign = !this.sevenStep.hasDesign;
  }

  selectFile(event: any) {
    if (event.target.files.length > 0) {
      const fileTem = (event.target.files[0] as File);
      const size = (fileTem.size / 1024) / 1024;
      if (size > 10.6) { return }

      this.file = fileTem;
      this.inputFile = this.file.name;
      this.nineStep.image = nanoid();
    }
  }

  handleNext(pages: number = 1): void {
    this.progress += (10 * pages);
    this.formData.oneStep.top -= (this.heightVH * pages);
    this.formData.twoStep.top -= (this.heightVH * pages);
    this.formData.threeStep.top -= (this.heightVH * pages);
    this.formData.fourStep.top -= (this.heightVH * pages);
    this.formData.fiveStep.top -= (this.heightVH * pages);
    this.formData.sixStep.top -= (this.heightVH * pages);
    this.formData.sevenStep.top -= (this.heightVH * pages);
    this.formData.eightStep.top -= (this.heightVH * pages);
    this.formData.nineStep.top -= (this.heightVH * pages);
    this.formData.tenStep.top -= (this.heightVH * pages);
    this.formData.finalStep.top -= (this.heightVH * pages);
  }

  handlePrevious(pages: number = 1): void {
    this.progress -= (10 * pages);
    this.formData.oneStep.top += (this.heightVH * pages);
    this.formData.twoStep.top += (this.heightVH * pages);
    this.formData.threeStep.top += (this.heightVH * pages);
    this.formData.fourStep.top += (this.heightVH * pages);
    this.formData.fiveStep.top += (this.heightVH * pages);
    this.formData.sixStep.top += (this.heightVH * pages);
    this.formData.sevenStep.top += (this.heightVH * pages);
    this.formData.eightStep.top += (this.heightVH * pages);
    this.formData.nineStep.top += (this.heightVH * pages);
    this.formData.tenStep.top += (this.heightVH * pages);
    this.formData.finalStep.top += (this.heightVH * pages);
  }

  timeRecorsive() {
    setInterval(() => {
      this.hours.subtract(1, 'second');
      this.finalHour = this.hours.format('HH');
      this.finalMinute = this.hours.format('MM');
      this.finalsecond = this.hours.format('ss');
    }, 1000);
  }

  handleSendForm() {
    this.loadingSend = true;
    if (this.formData.oneStep.name.length == 0) {
      alert('Incomplete information');
      this.handlePrevious(9);
      this.loadingSend = false;
      return;
    }
    if (this.formData.twoStep.email.length == 0) {
      alert('Incomplete information');
      this.handlePrevious(8)
      this.loadingSend = false;
      return;
    }
    if (this.formData.tenStep.address.length == 0) {
      alert('Incomplete information');
      this.loadingSend = false;
      return;
    }

    this.formData.id = nanoid();
    this.formData.createdAt = moment().format().toString(),
      this.formService.createForm(this.formData)
        .then(() => {
          this.loadingSend = false;
          this.uploadFile();
        })
  }

  uploadFile() {
    this.loadingSend = true;
    this.storageService.uploadFormFile(this.nineStep.image, this.file)
      .then(() => this.handleNext())
      .catch((e) => console.error(e))
      .finally(() => {
        this.loadingSend = false;
      });
  }
}
