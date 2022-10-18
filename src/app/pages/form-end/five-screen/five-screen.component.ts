import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFormData } from '@core/interfaces';

@Component({
  selector: 'vs-five-screen',
  templateUrl: './five-screen.component.html',
  styleUrls: ['./five-screen.component.scss']
})
export class FiveScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Input() dataForm!: IFormData;

  title = 'HAVE YOUR ALREADY PURCHASED THE TILE FOR YOUR PROJECT?';
  constructor(
  ) { }

  ngOnInit(): void {
  }

  handleChangeOption() {
    this.dataForm.haveTile = !this.dataForm.haveTile;
  }

  goToNextPage() {
    this.goToPage.emit(6);
  }

  goToBackPage() {
    this.goToPage.emit(4);
  }

}
