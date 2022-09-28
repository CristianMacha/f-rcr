import {NgModule} from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

const MATERIAL_MODULES = [
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule
]

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES]
})
export class MaterialModule {
}
