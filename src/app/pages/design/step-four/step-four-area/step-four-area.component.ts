import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { IArea } from '@core/interfaces';

@Component({
  selector: 'vs-step-four-area',
  templateUrl: './step-four-area.component.html',
  styleUrls: ['./step-four-area.component.scss']
})
export class StepFourAreaComponent implements OnInit, OnChanges {
  @Input() areas!: IArea[];

  otherActive = false;
  otherControl = new UntypedFormControl('', [Validators.required, Validators.minLength(3)]);

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.verifyOtherOption();
  }

  handleSelect(areaId: number) {
    const areaIndex = this.areas.findIndex((area) => area.id == areaId);
    this.areas[areaIndex].selected = !this.areas[areaIndex].selected;
  }

  verifyOtherOption() {
  }

  handleOther() {
    this.otherActive = true;
  }

  handleCheckOther() {
    if (this.otherControl.invalid) {
      return
    };

    this.areas.push({
      id: this.areas.length + 1,
      name: this.otherControl.value,
      selected: true,
      image: '',
      tiles: [{
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
      }]
    })
    this.otherControl.reset('');
    this.otherActive = false;
  }
}
