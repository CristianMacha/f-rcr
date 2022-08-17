import {Component, OnInit} from '@angular/core';
import {OrderService} from "@core/services";

@Component({
  selector: 'vs-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe((resp) => console.log(resp))
  }

}
