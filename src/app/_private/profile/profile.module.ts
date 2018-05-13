import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';
// import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Internal
import { AppTranslationModule } from '../../_system/app.translation.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MDBBootstrapModules,
    // ScrollToModule,
    //
    AppTranslationModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ProfileModule {}
