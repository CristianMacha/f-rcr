import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { IFormData } from '@core/interfaces';

@Component({
  selector: 'vs-eight-screen',
  templateUrl: './eight-screen.component.html',
  styleUrls: ['./eight-screen.component.scss']
})
export class EightScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Input() dataForm!: IFormData;

  title = 'APPROXIMATE SQUARE FOOTAGE OF THE AREAS TO BE TILED?';
  sizeControl = new UntypedFormControl('LESS THAN 25 (SMALL)');

  constructor() {
    this.sizeControl.valueChanges.subscribe((resp) => this.dataForm.size = resp);
  }

  ngOnInit(): void {
  }

  goToNextPage() {
    this.goToPage.emit(9);
  }

  goToBackPage() {
    this.goToPage.emit(7);
  }
}
