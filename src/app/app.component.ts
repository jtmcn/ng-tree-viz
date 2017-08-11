import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <section class="section">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </section>
  `
})
export class AppComponent {
  title = 'ng-force-viz';
}
