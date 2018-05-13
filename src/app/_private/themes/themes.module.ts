import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';

// Internal
import { AppTranslationModule } from '../../_system/app.translation.module';

import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesComponent } from './themes.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MDBBootstrapModules,

    AppTranslationModule,
    ThemesRoutingModule,
  ],
  declarations: [
    ThemesComponent,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ThemesModule {}
