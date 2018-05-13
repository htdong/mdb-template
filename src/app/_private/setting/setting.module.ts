import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';

// Internal
// import { AppTranslationModule } from '../../../app.translation.module';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MDBBootstrapModules,
    // ScrollToModule,
    //
    // AppTranslationModule,
    SettingRoutingModule,
  ],
  declarations: [
    SettingComponent,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SettingModule {}
