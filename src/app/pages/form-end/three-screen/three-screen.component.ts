import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { IFArea, IFormData } from '@core/interfaces';
import { FormEndService } from '../form-end.service';

@Component({
  selector: 'vs-three-screen',
  templateUrl: './three-screen.component.html',
  styleUrls: ['./three-screen.component.scss']
})
export class ThreeScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Output() selectedOption = new EventEmitter<IFArea>();
  @Input() dataForm!: IFormData;

  title = 'WHERE DO YOUR NEED TILE?';
  subTitle = 'PICK ONE OR MANY AREAS';
  otherActive = false;
  otherControl = new UntypedFormControl('', Validators.required);
  hasOneSelected = true;

  constructor(
    private formEndService: FormEndService,
    ) { }

  ngOnInit(): void {
  }

  handleCloseInputOther() {
    this.otherControl.reset('');
    this.otherActive = false;
  }

  handleSelected(optionId: number) {
    this.hasOneSelected = true;
    const optionIndex = this.dataForm.areas.findIndex((area) => area.id == optionId);
    this.dataForm.areas[optionIndex].selected = !this.dataForm.areas[optionIndex].selected;
    this.formEndService.emitUpdateOption();
  }

  addNewOption() {
    const newArea: IFArea = {
      id: this.dataForm.areas.length + 1,
      name: this.otherControl.value,
      selected: true,
      zones: []
    }

    this.dataForm.areas.push(newArea);
    this.otherActive = false;
    this.otherControl.reset('');
    this.formEndService.emitUpdateOption();
  }

  verifySomeOneSeleceted() {
    this.hasOneSelected = this.dataForm.areas.some((a) => a.selected);
    (this.hasOneSelected) && this.goToNextPage();
  }

  goToNextPage() {
    this.goToPage.emit(4);
  }

  goToBackPage() {
    this.goToPage.emit(2);
  }

  handleOther() {
    this.otherActive = true;
  }

}
