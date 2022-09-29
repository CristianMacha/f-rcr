import {Component, OnInit} from '@angular/core';
import {FormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {ProductInterface} from '@core/interfaces';
import {OrderService, StorageService, WoocommerceService} from '@core/services';
import {ActivatedRoute, Router} from "@angular/router";
import {nanoid} from "nanoid";
import * as moment from "moment";
import {finalize, timeout} from "rxjs";

@Component({
  selector: 'vs-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  activeCheckout = false;
  products: ProductInterface[] = [];
  loading: boolean = false;
  loadingCart = false;

  file!: File | null;
  fileName!: string;

  contactUsForm = new UntypedFormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    message: new FormControl(''),
    file: new FormControl('')
  });

  constructor(
    private wo: WoocommerceService,
    private orderService: OrderService,
    private router: Router,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((resp) => this.products = JSON.parse(resp['data']));
  }

  handleCheckout() {
    this.contactUsForm.invalid ? this.contactUsForm.markAllAsTouched() : this.createOrder();
  }

  handleSelectFile(event: any) {
    this.file = event.target.files[0];
    if (!this.file) {
      return
    }
    this.fileName = this.file.name;
    this.contactUsForm.controls['file'].patchValue(nanoid(10));
  }

  createOrder() {
    this.loading = true;
    const code = nanoid();
    this.orderService.createNewOrder({
      code,
      products: this.products,
      contact: this.contactUsForm.value,
      createdAt: moment().format().toString(),
    })
      .then((resp) => {
        this.cleanCart();
        this.uploadFile();
        this.contactUsForm.reset();
        this.router.navigateByUrl('checkout');
      })
      .finally(() => this.loading = false);
  }

  cleanCart(): void {
    if (this.products.length == 0) {
      return;
    }
    this.products.forEach((item) => this.wo.removeItem(item.key).subscribe((resp) => console.log(resp)));
  }

  uploadFile(): void {
    if (!this.file) {
      return;
    }
    this.storageService.uploadOrderFile(this.contactUsForm.controls['file'].value, this.file)
      .then(() => {
        (document.getElementById('fileUpload') as HTMLInputElement).value = "";
        this.file = null;
      })
  }

  handleAdd(product: ProductInterface, add: boolean): void {
    add ? product.quantity++ : product.quantity--;
    product.quantity == 0 && product.quantity++;
  }

  handleRemoveItem(index: number): void {
    this.products.splice(index, 1);
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
