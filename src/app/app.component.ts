import { Component } from '@angular/core';

import { MDBSpinningPreloader } from 'ng-mdb-pro';

@Component({
  selector: 'mdb-root',
  // app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private mdbSpinningPreloader: MDBSpinningPreloader,
  ) { }

  ngOnInit() {
    this.mdbSpinningPreloader.stop();
  }
}
