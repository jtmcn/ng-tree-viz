import { Component, Input, OnInit, OnChanges } from '@angular/core';

import * as Company from '../types/company';

@Component({
  selector: 'app-selection',
  styleUrls: ['./selection.component.scss'],
  template: `
  <div>
    <nav class="level is-mobile" *ngIf="selctedCompany">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-5">Company</p>
          <p class="title is-3">{{ selctedCompany.Name }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-5">Symbol</p>
          <p class="title is-3">{{ selctedCompany.Ticker }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-5">Sector</p>
          <p class="title is-3">{{ selctedCompany.Sector }}</p>
        </div>
      </div>
    </nav>
  </div>
  `
})
export class SelectionComponent implements OnInit, OnChanges {
  @Input() selctedCompany: Company.Details;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {}
}
