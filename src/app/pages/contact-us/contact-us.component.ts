import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService, StorageService } from '@core/services';
import * as moment from 'moment';
import { nanoid } from 'nanoid';

@Component({
  selector: 'vs-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  file!: File | null;
  fileName!: string;
  loading: boolean = false;

  contactUsForm = new UntypedFormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    message: new FormControl(''),
    file: new FormControl('')
  });

  constructor(
    private orderService: OrderService,
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

  handleSelectFile(event: any) {
    this.file = event.target.files[0];
    if (!this.file) {
      return
    }
    this.fileName = this.file.name;
    this.contactUsForm.controls['file'].patchValue(nanoid(10));
  }

  handleCheckout() {
    this.contactUsForm.invalid ? this.contactUsForm.markAllAsTouched() : this.createOrder();
  }

  createOrder() {
    this.loading = true;
    const code = nanoid();
    this.orderService.createNewOrder({
      code,
      contact: this.contactUsForm.value,
      createdAt: moment().format().toString(),
    })
      .then((resp) => {
        this.uploadFile();
        this.contactUsForm.reset();
        this.router.navigateByUrl('checkout');
      })
      .finally(() => this.loading = false);
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

}
