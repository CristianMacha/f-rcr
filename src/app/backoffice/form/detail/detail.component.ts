import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '@core/services';

@Component({
  selector: 'vs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  loadingFile: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(DOCUMENT) private document: Document,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

  handleOpenLink(fileName: string): void {
    this.loadingFile = true;
    this.storageService.getFormUrl(fileName).subscribe((url) =>  this.openLink(url));
  }

  openLink(url: string) {
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.click();
    link.remove();
    this.loadingFile = false;
  }

}
