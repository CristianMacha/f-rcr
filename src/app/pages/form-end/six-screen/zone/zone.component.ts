import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IFArea, IFZone } from '@core/interfaces';
import { FormEndService } from '../../form-end.service';

@Component({
  selector: 'vs-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit, OnChanges {
  @Output() selectedOneOption = new EventEmitter<boolean>();
  @Input() area!: IFArea;
  @Input() zoneId: number = 0;

  zoneIndexActive = 0;
  zonesSelected: IFZone[] = [];

  constructor(
    private formEndService: FormEndService,
  ) { }

  ngOnInit(): void {
    this.zonesSelected = this.area.zones.filter((z) => z.selected);
    this.formEndService.getUpdateZone$().subscribe((resp) => {
      this.zonesSelected = this.area.zones.filter((z) => z.selected);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    const zoneIndexInvalid = this.zonesSelected.findIndex((zone) => zone.id == this.zoneId);
    if(zoneIndexInvalid >= 0) {
      this.zoneIndexActive = zoneIndexInvalid;
    }
  }

  handleSelectTile(zoneId: number, tileId: number) {
    const zoneIndex = this.zonesSelected.findIndex((z) => z.id == zoneId);
    const previousTileIndex = this.zonesSelected[zoneIndex].tiles.findIndex((t) => t.selected);
    if(previousTileIndex >= 0) {
      this.zonesSelected[zoneIndex].tiles[previousTileIndex].selected = false;
    }

    const tileCurrentIndex = this.zonesSelected[zoneIndex].tiles.findIndex((t) => t.id == tileId);
    this.zonesSelected[zoneIndex].tiles[tileCurrentIndex].selected = true;
    this.selectedOneOption.emit(true);
  }

  handleNext() {
    this.zoneIndexActive++;
  }

  handlePrevious() {
    this.zoneIndexActive--;
  }

}
