import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFZone } from '@core/interfaces';

@Component({
  selector: 'vs-aprox-square',
  templateUrl: './aprox-square.component.html',
  styleUrls: ['./aprox-square.component.scss']
})
export class AproxSquareComponent implements OnInit {
  sizeControl = new UntypedFormControl('');

  constructor(
    public dialogRef: MatDialogRef<AproxSquareComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFZone,
  ) { }

  ngOnInit(): void {
    this.sizeControl.patchValue(this.data.size);
    //this.sizeControl.valueChanges.subscribe((resp) => this.dataForm.size = resp);
  }

  handleAccept() {
    const value = this.sizeControl.value;
    this.dialogRef.close(value);
  }
}
