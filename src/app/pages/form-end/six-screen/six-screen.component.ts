import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IFArea, IFormData, IFZone } from '@core/interfaces';

@Component({
  selector: 'vs-six-screen',
  templateUrl: './six-screen.component.html',
  styleUrls: ['./six-screen.component.scss']
})
export class SixScreenComponent implements OnInit, OnChanges {
  @Output() goToPage = new EventEmitter<number>();
  @Input() dataForm!: IFormData;
  @Input() areaSelected!: IFArea;
  @Input() zoneSelected!: IFZone;

  title = 'TYPE OF TILE ARE YOU PLANNING TO INSTALL?';

  areaIndexActive = 0;
  areasSelected: IFArea[] = [];

  constructor() { }

  ngOnInit(): void {
    this.areasSelected = this.dataForm.areas.filter((area) => area.selected)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.areasSelected = this.dataForm.areas.filter((area) => area.selected);
  }

  handleNext() {
    this.areaIndexActive++;
  }

  handlePrevious() {
    this.areaIndexActive--;
  }

  goToNextPage() {
    this.goToPage.emit(7);
  }

  goToBackPage() {
    this.goToPage.emit(5);
  }

}
