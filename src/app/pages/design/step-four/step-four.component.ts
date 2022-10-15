import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOption } from '@core/interfaces';

@Component({
  selector: 'vs-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
  @Output() next: EventEmitter<number> = new EventEmitter();
  @Input() optionsSelected!: IOption[];

  title = 'WHAT AREAS NEED TILING WORK?';
  subTitle = 'PICK ONE OR MANY AREAS';

  optionsActive: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.optionsSelected);

  }

  handleSubmit() {
    this.next.emit(4);
  }

}
