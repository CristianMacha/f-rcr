import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'vs-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  @Output() next: EventEmitter<number> = new EventEmitter();
  @Input() oneStep: any;

  title = `HELLO, WHAT'S YOUR NAME?`;
  nameControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
    this.nameControl.valueChanges.subscribe((resp) => this.oneStep.name = resp);
  }

  handleSubmit() {
    this.nameControl.invalid ? this.nameControl.markAsTouched() : this.next.emit(2);
  }

}
