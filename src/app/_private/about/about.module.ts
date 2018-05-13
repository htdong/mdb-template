import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from 'ng-mdb-pro';
// import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Internal
// import { AppTranslationModule } from '../../../app.translation.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MDBBootstrapModules,
    // ScrollToModule,
    //
    // AppTranslationModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent,
  ],
  providers: [],
  exports: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AboutModule {}
