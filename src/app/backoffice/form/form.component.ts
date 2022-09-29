import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from '@core/services';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'vs-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  columnsToDisplay = ['created', 'fullName', 'location', 'option'];
  dataSource = new MatTableDataSource<any>([]);

  loading = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private formService: FormService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getForms();
  }

  openDialog(form: any) {
    this.dialog.open(DetailComponent, {
      width: '500px',
      autoFocus: false,
      data: form
    })
  }

  getForms(): void {
    this.loading = true;
    this.formService.getForms()
      .subscribe((resp) => {
        this.dataSource.data = resp;
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      })
  }

}
