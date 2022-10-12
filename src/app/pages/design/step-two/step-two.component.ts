import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'vs-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  @Output() next: EventEmitter<number> = new EventEmitter();
  @Input() twoStep: any;

  title = `what's your email?`;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit(): void {
    this.emailControl.valueChanges.subscribe((resp) => this.twoStep.email = resp);
  }

  handleSubmit() {
    this.emailControl.invalid ? this.emailControl.markAsTouched() : this.next.emit(3);
  }

}
