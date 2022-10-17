import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFArea, IFormData, IFZone } from '@core/interfaces';
import { FormEndService } from '../form-end.service';

@Component({
  selector: 'vs-six-screen',
  templateUrl: './six-screen.component.html',
  styleUrls: ['./six-screen.component.scss']
})
export class SixScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Input() dataForm!: IFormData;

  title = 'TYPE OF TILE ARE YOU PLANNING TO INSTALL?';

  areaIndexActive = 0;
  areasSelected: IFArea[] = [];

  constructor(private formEndService: FormEndService) { }

  ngOnInit(): void {
    this.formEndService.getUpdateOption$().subscribe((resp) => {
      this.areasSelected = this.dataForm.areas.filter((area) => area.selected);
    })
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
    this.areaIndexActive = 0;
    this.goToPage.emit(5);
  }

}
