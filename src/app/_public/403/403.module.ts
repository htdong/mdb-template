import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';

import { AppTranslationModule } from '../../_system/app.translation.module';

import { P403RoutingModule } from './403-routing.module';
import { P403Component } from './403.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MDBBootstrapModules,

    AppTranslationModule,
    P403RoutingModule,
  ],
  declarations: [
    P403Component,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class P403Module {}
