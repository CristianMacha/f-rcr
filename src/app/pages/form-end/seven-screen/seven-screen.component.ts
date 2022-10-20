import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFormData } from '@core/interfaces';

@Component({
  selector: 'vs-seven-screen',
  templateUrl: './seven-screen.component.html',
  styleUrls: ['./seven-screen.component.scss']
})
export class SevenScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Input() dataForm!: IFormData;

  title = 'DO YOU WANT ANY SPECIAL DESIGN OR PATTERN?';
  constructor() { }

  ngOnInit(): void {
  }

  handleChangeOption() {
    this.dataForm.hasDesign = !this.dataForm.hasDesign;
  }

  goToNextPage() {
    this.goToPage.emit(9);
  }

  goToBackPage() {
    this.goToPage.emit(6);
  }
}
