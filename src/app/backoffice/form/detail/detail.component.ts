import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '@core/services';

@Component({
  selector: 'vs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

}
