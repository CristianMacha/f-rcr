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
  styleUrls: ['./form-end.component.scss']
})
export class FormEndComponent implements OnInit {
  innerHeight = window.innerHeight;
  progress = 10;

  file!: File;
  dataForm: IFormData = {
    id: '',
    createdAt: '',
    fullName: '',
    email: '',
    address: '',
    haveTile: false,
    hasDesign: false,
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
        zones: [
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
        zones: [
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
        zones: [
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
        zones: [
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
  }

  pagesA = {
    'one': `${window.innerHeight * 0}`,
    'two': `${window.innerHeight * 1}`,
    'three': `${window.innerHeight * 2}`,
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
    const currentPage = this.pages.find((p) => p.active == true);

    if (!currentPage) { return }
    if (currentPage.id == page) { return }

    if (currentPage.id > page) {
      const pagesSalt = currentPage.id - page;
      const subtractHeight = window.innerHeight * pagesSalt;
      this.pages.forEach((p) => {
        p.top += subtractHeight;
      });
      this.pages[(page - 1)].active = true;
      currentPage.active = false;
      this.progress -= 10;
    }

    if (currentPage.id < page) {
      const pagesSalt = page - currentPage.id;
      const subtractHeight = window.innerHeight * pagesSalt;
      this.pages.forEach((p) => {
        p.top -= subtractHeight;
      });
      this.pages[page-1].active = true;
      currentPage.active = false;
      this.progress += 10;
    }
  }

  generatePages() {
    for (let index = 0; index < 11; index++) {
      this.pages.push({ id: (index + 1), top: this.innerHeight * index, active: (index == 0) })
    }
  }

}
