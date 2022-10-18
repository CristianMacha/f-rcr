import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFArea, IFormData, IFZone } from '@core/interfaces';
import { FormEndService } from '../form-end.service';

interface IValidation {
  areaId: number
  zoneId: number
  hasSelected: boolean
}

@Component({
  selector: 'vs-six-screen',
  templateUrl: './six-screen.component.html',
  styleUrls: ['./six-screen.component.scss']
})
export class SixScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Input() dataForm!: IFormData;

  title = 'TYPE OF TILE ARE YOUR PLANNING TO INSTALL?';

  areaIndexActive = 0;
  zoneIdInvalid = 0;
  areasSelected: IFArea[] = [];
  hasError = false;

  constructor(private formEndService: FormEndService) { }

  ngOnInit(): void {
    this.areasSelected = this.dataForm.areas.filter((area) => area.selected);
  }

  setHasError() {
    this.hasError = false;
  }

  handleNext() {
    this.areaIndexActive++;
  }

  handlePrevious() {
    this.areaIndexActive--;
  }

  verifySelectedOption() {
    const areaVerify: IValidation[] = [];

    this.areasSelected.forEach((area) => {
      area.zones.forEach((zone) => {
        if (zone.selected) {
          const valid = zone.tiles.some((tile) => tile.selected);
          areaVerify.push({ areaId: area.id, zoneId: zone.id, hasSelected: valid })
        }
      })
    })

    const firstAreaInvalid = areaVerify.filter((verify) => !verify.hasSelected);

    if(firstAreaInvalid.length > 0) {
      const areaIndex = this.areasSelected.findIndex((area) => area.id == firstAreaInvalid[0].areaId);
      this.areaIndexActive = areaIndex;
      this.zoneIdInvalid = firstAreaInvalid[0].zoneId;
      this.hasError = true;
    }

    if(firstAreaInvalid.length == 0) {
      this.goToNextPage();
    }
  }

  goToNextPage() {
    this.goToPage.emit(7);
  }

  goToBackPage() {
    this.areaIndexActive = 0;
    this.goToPage.emit(5);
  }

}
