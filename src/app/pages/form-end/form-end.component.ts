import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IFormData } from '@core/interfaces';
import { nanoid } from 'nanoid';

interface IPage {
  id: number
  top: number
  active: boolean
}

@Component({
  selector: 'vs-form-end',
  templateUrl: './form-end.component.html',
  styleUrls: ['./form-end.component.scss'],
  animations: [
    trigger(
      'animate',[
        transition(':enter', [
          style({
            opacity: 0
          }),
          animate('200ms', style({
            opacity: 1
           })),
        ]),
        transition(':leave', [
          animate('100ms', style({
            opacity: 0
           })),
        ])
      ]
    )
  ]
})
export class FormEndComponent implements OnInit {
  innerHeight = window.innerHeight;
  progress = 10;
  progressBar = 0;

  file!: File;
  dataForm: IFormData = {
    id: '',
    createdAt: '',
    fullName: '',
    email: '',
    address: '',
    haveTile: false,
    size: 'LESS THAN 25 (SMALL)',
    image: '',
    areas: [
      {
        id: 1,
        name: 'BATHROOM',
        selected: false,
        zones: [
          {
            id: 1,
            name: 'floor',
            image: 'assets/areas/bathroom_3.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 2,
            name: 'backsplash',
            image: 'assets/areas/bathroom_4.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 3,
            name: 'tub/shower',
            image: 'assets/areas/bathroom_1.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 4,
            name: 'wall',
            image: 'assets/areas/bathroom_2.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
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
        zones: [
          {
            id: 1,
            name: 'BACKSPLASH',
            image: 'assets/areas/kitchen_3.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 2,
            name: 'FLOOR',
            image: 'assets/areas/kitchen_4.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
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
        zones: [
          {
            id: 1,
            name: 'exterior_1',
            image: 'assets/areas/exterior_1.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 2,
            name: 'exterior_2',
            image: 'assets/areas/exterior_2.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 3,
            name: 'exterior_3',
            image: 'assets/areas/exterior_3.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
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
        zones: [
          {
            id: 1,
            name: 'table',
            image: 'assets/areas/dinning_room_1.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 2,
            name: 'wall',
            image: 'assets/areas/dinning_room_2.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 3,
            name: 'floor',
            image: 'assets/areas/dinning_room_3.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 4,
            name: 'pillar',
            image: 'assets/areas/dinning_room_4.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
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
        zones: [
          {
            id: 1,
            name: 'hallway_1',
            image: 'assets/areas/hallway_2.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 2,
            name: 'wall',
            image: 'assets/areas/hallway_1.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
          {
            id: 3,
            name: 'floor',
            image: 'assets/areas/hallway_3.jpg',
            selected: false,
            size: '',
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
              },
              {
                id: 5,
                name: 'Not Sure',
                selected: false,
              }
            ]
          },
        ]
      },
    ]
  }

  pages: IPage[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generatePages();
    this.goToPage(1);
  }

  setFile(file: File) {
    this.file = file;
    if(this.file) {
      this.dataForm.image = nanoid();
    }
  }

  goToPage(page: number) {
    this.progress = page * 10;
    this.progressBar = (this.progress / 10) * 14.28;
  }

  generatePages() {
    for (let index = 0; index < 11; index++) {
      this.pages.push({ id: (index + 1), top: this.innerHeight * index, active: (index == 0) })
    }
  }

}
