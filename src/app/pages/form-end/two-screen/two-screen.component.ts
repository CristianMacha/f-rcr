import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { IFormData } from '@core/interfaces';

@Component({
  selector: 'vs-two-screen',
  templateUrl: './two-screen.component.html',
  styleUrls: ['./two-screen.component.scss'],
})
export class TwoScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Input() dataForm!: IFormData;

  title = `WHAT'S YOUR EMAIL?`;
  emailControl = new UntypedFormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
    this.emailControl.patchValue(this.dataForm.email);
    this.emailControl.valueChanges.subscribe((resp) => this.dataForm.email = resp);
  }

  verifyControl() {
    this.emailControl.invalid ? this.emailControl.markAsTouched() : this.goToNextPage();
  }

  goToNextPage() {
    this.goToPage.emit(3);
  }

  goToBackPage() {
    this.goToPage.emit(1);
  }
}
