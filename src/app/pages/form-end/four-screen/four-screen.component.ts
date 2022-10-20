import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IFArea, IFormData, IFZone } from '@core/interfaces';
import { FormEndService } from '../form-end.service';
import { AproxSquareComponent } from './components/aprox-square/aprox-square.component';

@Component({
  selector: 'vs-four-screen',
  templateUrl: './four-screen.component.html',
  styleUrls: ['./four-screen.component.scss']
})
export class FourScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Input() dataForm!: IFormData;

  title = 'WHAT AREAS NEED TILING WORK?';
  subTitle = 'PICK ONE OR MANY AREAS';
  otherControl = new UntypedFormControl('', Validators.required);
  areasSelected: IFArea[] = [];

  areaIndexActive = 0;

  otherActive = false;
  hasError = false;

  constructor(
    private formEndService: FormEndService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.areasSelected = this.dataForm.areas.filter((area) => area.selected);
  }

  handleSelectZoneAndOpenDialog(areaId: number, zone: IFZone) {
    if(zone.selected) {
      this.handleSelectZone(areaId, zone.id);
    } else {
      const dialogRef = this.dialog.open(AproxSquareComponent, {
        width: '500px',
        data: zone
      });

      dialogRef.afterClosed().subscribe((resp) => {
        if(resp.length > 1) {
          zone.size = resp;
          this.handleSelectZone(areaId, zone.id)
        }
      })
    }
  }

  verifyZonesSelected() {
    const areaVerify: boolean[] = [];
    this.areasSelected.forEach((a) => {
      const valid = a.zones.some((z) => z.selected);
      areaVerify.push(valid);
    })
    this.hasError = areaVerify.some(e => e == false);
    if (this.hasError) {
      this.areaIndexActive = areaVerify.findIndex((e) => e == false);
    }

    !this.hasError && this.goToNextPage();
  }

  handleSelectZone(areaId: number, zoneId: number) {
    const areaIndex = this.dataForm.areas.findIndex((area) => area.id == areaId);
    const zoneIndex = this.dataForm.areas[areaIndex].zones.findIndex((zone) => zone.id == zoneId);
    this.dataForm.areas[areaIndex].zones[zoneIndex].selected = !this.dataForm.areas[areaIndex].zones[zoneIndex].selected;
    this.formEndService.emitUpdateZone();
    this.hasError = false;
  }

  handleCheck(areaId: number) {
    const areaIndex = this.dataForm.areas.findIndex((area) => area.id == areaId);
    const newZone: IFZone = {
      id: this.dataForm.areas[areaIndex].zones.length + 1,
      image: 'assets/imgs/other.png',
      name: this.otherControl.value,
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
        }
      ]
    }

    this.dataForm.areas[areaIndex].zones.push(newZone);

    this.otherActive = false;
    this.otherControl.reset('');
    this.formEndService.emitUpdateZone();
  }

  handleOtherSelect() {
    this.otherActive = true;
  }

  handleOtherClose() {
    this.otherControl.reset('');
    this.otherActive = false;
  }

  handleNext() {
    this.areaIndexActive++;
  }

  handlePrevious() {
    this.areaIndexActive--;
  }

  goToNextPage() {
    this.goToPage.emit(5);
  }

  goToBackPage() {
    this.areaIndexActive = 0;
    this.goToPage.emit(3);
  }

}
