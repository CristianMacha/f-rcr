import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { IFormData } from '@core/interfaces';
import { FormService, StorageService } from '@core/services';
import * as moment from 'moment';
import { nanoid } from 'nanoid';

@Component({
  selector: 'vs-ten-screen',
  templateUrl: './ten-screen.component.html',
  styleUrls: ['./ten-screen.component.scss']
})
export class TenScreenComponent implements OnInit {
  @Output() goToPage = new EventEmitter<number>();
  @Output() formFinished = new EventEmitter<boolean>();
  @Input() file!: File;
  @Input() dataForm!: IFormData;

  title = 'ONE MORE THING - WHERE WILL THE PROJECT BE?';
  locationControl = new UntypedFormControl('');
  loading = false;

  constructor(
    private formService: FormService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.locationControl.valueChanges.subscribe((resp) => this.dataForm.address = resp);
  }

  goToNextPage() {
    this.goToPage.emit(11);
  }

  goToBackPage() {
    this.goToPage.emit(9);
  }

  finishedForm() {
    this.loading = true;
    this.dataForm.id = nanoid();
    this.dataForm.createdAt = moment().format();
    this.formService.createForm(this.dataForm)
      .then(() => this.file ? this.uploadFile() : this.goToNextPage())
      .finally(() => this.loading = false)
  }

  uploadFile() {
    this.loading = true;
    this.storageService.uploadFormFile(this.dataForm.image, this.file)
      .then(() => this.goToNextPage())
      .catch((e) => console.error(e))
      .finally(() => {
        this.loading = false;
      });
  }
}
