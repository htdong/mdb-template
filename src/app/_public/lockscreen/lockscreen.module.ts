import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';
// import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Internal
import { AppTranslationModule } from '../../_system/app.translation.module';

import { LockscreenRoutingModule } from './lockscreen-routing.module';
import { LockscreenComponent } from './lockscreen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MDBBootstrapModules,

    // ScrollToModule,
    //
    AppTranslationModule,
    LockscreenRoutingModule,
  ],
  declarations: [
    LockscreenComponent,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class LockscreenModule {}
