import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {OrderInterface, ProductInterface} from "@core/interfaces";
import {DOCUMENT} from "@angular/common";
import {StorageService} from "@core/services";

@Component({
  selector: 'vs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  columnsToDisplay = ['photo', 'name', 'material', 'tile', 'quantity'];
  dataSource = new MatTableDataSource<ProductInterface>([]);

  loadingFile: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrderInterface,
    @Inject(DOCUMENT) private document: Document,
    private storageService: StorageService,
  ) {
    this.dataSource.data = this.data.products;
  }

  ngOnInit(): void {
  }

  handleOpenLink(fileName: string): void {
    this.loadingFile = true;
    this.storageService.getUrl(fileName).subscribe((url) =>  this.openLink(url));
  }

  openLink(url: string) {
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.click();
    link.remove();
    this.loadingFile = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
