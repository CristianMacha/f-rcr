import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFormData } from '@core/interfaces';

@Component({
  selector: 'vs-nine-screen',
  templateUrl: './nine-screen.component.html',
  styleUrls: ['./nine-screen.component.scss']
})
export class NineScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Output() file = new EventEmitter<File>();
  @Input() dataForm!: IFormData;

  title = 'PICTURE OF YOU PROJECT';
  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event: any) {
    this.file.emit(event.target.files[0]);
  }

  goToNextPage() {
    this.goToPage.emit(6);
  }

  goToBackPage() {
    this.goToPage.emit(4);
  }
}
