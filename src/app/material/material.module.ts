import {NgModule} from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_MODULES = [
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule
]

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES]
})
export class MaterialModule {
}
