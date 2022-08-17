import {Component, OnInit} from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {Item, WooInterface} from '@core/interfaces';
import {OrderService, WoocommerceService} from '@core/services';
import {Router} from "@angular/router";

@Component({
  selector: 'vs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  activeCheckout = false;
  woo!: WooInterface;
  loading: boolean = false;

  contactUsForm = new UntypedFormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    message: new FormControl(''),
    photo: new FormControl('')
  });

  constructor(
    private wo: WoocommerceService,
    private orderService: OrderService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getCart();
  }

  handleCheckout() {
    this.contactUsForm.invalid ? this.contactUsForm.markAllAsTouched() : this.createOrder();
  }

  createOrder() {
    this.loading = true;
    this.orderService.createNewOrder({woo: this.woo, contact: this.contactUsForm.value, createdAt: new Date().toString()})
      .then((resp) => {
        this.cleanCart();
        this.router.navigateByUrl('checkout');
      })
      .finally(() => this.loading = false);
  }

  getCart(): void {
    this.wo.getCart()
      .subscribe((resp) => {
        this.woo = resp;
        console.log(resp)
      });
  }

  cleanCart(): void {
    this.woo.items.forEach((item) => this.wo.removeItem(item.key).subscribe((resp) => console.log(resp)));
  }

  handleAdd(item: Item, add: boolean): void {
    add ? item.quantity++ : item.quantity--;
    item.quantity == 0 && item.quantity++;
  }

  handleRemoveItem(item: Item): void {
    const indexItem = this.woo.items.findIndex(i => i.key === item.key);
    (this.woo.items.length > 1) && this.woo.items.splice(indexItem, 1);
  }

  openCheckout(): void {
    this.activeCheckout = !this.activeCheckout;

    const checkout = document.getElementById('view_checkout');
    if (!checkout) {
      return;
    }

    const cart_popup = document.getElementById('view_cart_popup');
    if (!cart_popup) {
      return;
    }

    const checkout_container = document.getElementById('checkout_container');
    if (!checkout_container) {
      return;
    }

    if (this.activeCheckout) {
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
