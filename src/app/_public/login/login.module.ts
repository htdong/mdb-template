import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';
// import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Internal
import { AppTranslationModule } from '../../_system/app.translation.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MDBBootstrapModules,

    // ScrollToModule,
    //
    AppTranslationModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class LoginModule {}
