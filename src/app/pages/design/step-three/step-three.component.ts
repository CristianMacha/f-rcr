import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { IOption } from '@core/interfaces';


@Component({
  selector: 'vs-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  @Input() options!: IOption[];
  @Output() optionsSelected: EventEmitter<IOption[]> = new EventEmitter();
  @Output() next: EventEmitter<number> = new EventEmitter();

  title = `WHERE DO YOU NEED TILE?`;
  subtitle = 'PICK ONE OR MANY AREAS';

  otherActive = false;

  otherControl = new UntypedFormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(optionId: number) {
    const optionIndex = this.options.findIndex((option) => option.id == optionId);
    this.options[optionIndex].selected = !this.options[optionIndex].selected;
  }

  handleOther() {
    this.otherActive = true;
  }

  handleCheckOther() {
    if (this.otherControl.invalid) {
      return
    }

    this.options.push({ id: this.options.length + 1, name: this.otherControl.value, selected: true, areas: [] })
    this.otherControl.reset('');
    this.otherActive = false;
  }

  handleSubmit() {
    const optionSelected = this.options.filter((option) => option.selected == true);
    this.optionsSelected.emit(optionSelected);
    this.next.emit(4);
  }

}
