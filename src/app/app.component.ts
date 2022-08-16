import { Component, OnInit } from '@angular/core';
import { Item } from './core/interfaces/woo.interfaces';
import { WoocommerceService } from './core/services/woocommerce.service';

@Component({
  selector: 'vs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'f-cart-page';
  activeCheckout = false;

  items: Item[] = [];

  constructor(private wo: WoocommerceService) {}

  ngOnInit(): void {
      this.getCart();
  }

  getCart(): void {
    this.wo.getCart()
      .subscribe((resp) => {console.log(resp); this.items = resp.items});
  }

  handleAdd(item: Item, add: boolean): void {
    add ? item.quantity++ : item.quantity--;
    item.quantity == 0 && item.quantity++;
  }

  handleRemoveItem(item: Item): void {
    console.log(this.items.length);

    const indexItem = this.items.findIndex(i => i.key === item.key);
    (this.items.length > 1) && this.items.splice(indexItem, 1);
  }

  openCheckout(): void {
    this.activeCheckout = !this.activeCheckout;

    const checkout = document.getElementById('view_checkout');
    if (!checkout) { return; }

    const checkout_container = document.getElementById('checkout_container');
    if(!checkout_container) { return; }

    if(this.activeCheckout) {
      checkout_container.classList.remove('bottom-2');
      checkout_container.classList.remove('p-5');
      checkout_container.classList.add('bottom-0');

      checkout.classList.remove('rounded-lg');
      checkout.classList.remove('h-10');
      checkout.classList.remove('overflow-hidden');
      checkout.classList.add('h-auto')
      checkout.classList.add('overflow-auto')
    } else {
      checkout_container.classList.remove('bottom-0');
      checkout_container.classList.add('bottom-2');
      checkout_container.classList.add('p-5');

      checkout.classList.add('rounded-lg');
      checkout.classList.add('h-10');
      checkout.classList.add('overflow-hidden');
      checkout.classList.remove('h-auto')
      checkout.classList.remove('overflow-auto')
    }
  }
}
