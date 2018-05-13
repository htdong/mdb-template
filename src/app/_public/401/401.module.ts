import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';

import { AppTranslationModule } from '../../_system/app.translation.module';

import { P401RoutingModule } from './401-routing.module';
import { P401Component } from './401.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MDBBootstrapModules,

    AppTranslationModule,
    P401RoutingModule,
  ],
  declarations: [
    P401Component,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class P401Module {}
