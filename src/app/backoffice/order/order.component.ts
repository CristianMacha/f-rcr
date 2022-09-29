import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from "@core/services";
import {OrderInterface} from "@core/interfaces";
import {finalize} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DetailComponent} from "./detail/detail.component";

@Component({
  selector: 'vs-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  columnsToDisplay = ['created', 'customer', 'email', 'city', 'option'];
  dataSource = new MatTableDataSource<OrderInterface>([]);

  loading = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private orderService: OrderService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getOrders()
  }

  openDialog(order: OrderInterface): void {
    this.dialog.open(DetailComponent, {
      width: '600px',
      autoFocus: false,
      data: order,
    })
  }

  getOrders(): void {
    this.loading = true;
    this.orderService.getOrders()
      .subscribe((resp) => {
        this.dataSource.data = resp;
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      });
  }

}
