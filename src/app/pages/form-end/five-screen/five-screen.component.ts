import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFormData } from '@core/interfaces';
import { FormEndService } from '../form-end.service';

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
    private formEndService: FormEndService
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
