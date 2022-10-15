import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { IFArea, IFormData, IFZone } from '@core/interfaces';

@Component({
  selector: 'vs-four-screen',
  templateUrl: './four-screen.component.html',
  styleUrls: ['./four-screen.component.scss']
})
export class FourScreenComponent implements OnInit, OnChanges {
  @Output() goToPage = new EventEmitter<number>();
  @Output() zoneSelected = new EventEmitter<IFZone>();
  @Input() dataForm!: IFormData;
  @Input() areaSelected!: IFArea;

  title = 'WHAT AREAS NEED TILING WORK?';
  subTitle = 'PICK ONE OR MANY AREAS';
  otherControl = new UntypedFormControl('', Validators.required);
  areasSelected: IFArea[] = [];

  areaIndexActive = 0;
  //areasSelected = 0;

  otherActive = false;

  constructor() { }

  ngOnInit(): void {
    this.areasSelected = this.dataForm.areas.filter((area) => area.selected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.areasSelected = this.dataForm.areas.filter((area) => area.selected);
  }

  handleSelectZone(areaId: number, zoneId: number) {
    const areaIndex = this.dataForm.areas.findIndex((area) => area.id == areaId);
    const zoneIndex = this.dataForm.areas[areaIndex].zones.findIndex((zone) => zone.id == zoneId);
    this.dataForm.areas[areaIndex].zones[zoneIndex].selected = !this.dataForm.areas[areaIndex].zones[zoneIndex].selected;
    this.zoneSelected.emit(this.dataForm.areas[areaIndex].zones[zoneIndex]);
  }

  handleCheck(areaId: number) {
    const areaIndex = this.dataForm.areas.findIndex((area) => area.id == areaId);
    const newZone: IFZone = {
      id: this.dataForm.areas[areaIndex].zones.length + 1,
      image: 'assets/imgs/other.png',
      name: this.otherControl.value,
      selected: true,
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
    }

    this.dataForm.areas[areaIndex].zones.push(newZone);

    this.otherActive = false;
    this.otherControl.reset('');
    this.zoneSelected.emit(newZone);
  }

  handleOtherSelect() {
    this.otherActive = true;
  }

  handleOtherClose() {
    this.otherControl.reset('');
    this.otherActive = false;
  }

  goToNextPage() {
    this.goToPage.emit(5);
  }

  handleNext() {
    this.areaIndexActive++;
  }

  handlePrevious() {
    this.areaIndexActive--;
  }

  goToBackPage() {
    this.goToPage.emit(3);
  }

}
