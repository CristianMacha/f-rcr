import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { IFormData } from '@core/interfaces';

@Component({
  selector: 'vs-one-screen',
  templateUrl: './one-screen.component.html',
  styleUrls: ['./one-screen.component.scss']
})
export class OneScreenComponent implements OnInit {
  @Input() dataForm!: IFormData;
  @Output() goToPage = new EventEmitter<number>();

  title = `HELLO, WHAT'S YOUR NAME?`;

  nameControl = new UntypedFormControl('', Validators.required);

  constructor() {
  }

  ngOnInit(): void {
    this.nameControl.patchValue(this.dataForm.fullName);
    this.nameControl.valueChanges.subscribe((name) => {
      this.dataForm.fullName = name;
    });
  }

  verifyControl() {
    this.nameControl.invalid ? this.nameControl.markAsTouched() : this.goToNextPage();
  }

  goToNextPage() {
    this.goToPage.emit(2);
  }

}
