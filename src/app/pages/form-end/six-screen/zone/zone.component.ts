import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IFZone } from '@core/interfaces';

@Component({
  selector: 'vs-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit, OnChanges {
  @Input() zoneSelected!: IFZone;
  @Input() zones!: IFZone[];

  zoneIndexActive = 0;
  zonesSelected: IFZone[] = [];

  constructor() { }

  ngOnInit(): void {
    this.zonesSelected = this.zones.filter((z) => z.selected);
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

  ngOnChanges(changes: SimpleChanges): void {
    this.zonesSelected = this.zones.filter((z) => z.selected);
  }

  handleNext() {
    this.zoneIndexActive++;
  }

  handlePrevious() {
    this.zoneIndexActive--;
  }

}
