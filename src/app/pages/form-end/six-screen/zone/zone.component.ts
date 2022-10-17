import { Component, Input, OnInit } from '@angular/core';
import { IFArea, IFZone } from '@core/interfaces';
import { FormEndService } from '../../form-end.service';

@Component({
  selector: 'vs-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  @Input() area!: IFArea;

  zoneIndexActive = 0;
  zonesSelected: IFZone[] = [];

  constructor(
    private formEndService: FormEndService,
  ) { }

  ngOnInit(): void {
    this.zonesSelected = this.area.zones.filter((z) => z.selected);
    this.formEndService.getUpdateZone$().subscribe((resp) => {
      console.log('change');
      this.zonesSelected = this.area.zones.filter((z) => z.selected);
    })
  }

  handleSelectTile(zoneId: number, tileId: number) {
    const zoneIndex = this.zonesSelected.findIndex((z) => z.id == zoneId);
    const previousTileIndex = this.zonesSelected[zoneIndex].tiles.findIndex((t) => t.selected);
    if(previousTileIndex >= 0) {
      this.zonesSelected[zoneIndex].tiles[previousTileIndex].selected = false;
    }

    const tileCurrentIndex = this.zonesSelected[zoneIndex].tiles.findIndex((t) => t.id == tileId);
    this.zonesSelected[zoneIndex].tiles[tileCurrentIndex].selected = true;
  }

  handleNext() {
    this.zoneIndexActive++;
  }

  handlePrevious() {
    this.zoneIndexActive--;
  }

}
