import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';

import { AppTranslationModule } from '../../_system/app.translation.module';

import { P404RoutingModule } from './404-routing.module';
import { P404Component } from './404.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MDBBootstrapModules,

    AppTranslationModule,
    P404RoutingModule,
  ],
  declarations: [
    P404Component,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class P404Module {}
