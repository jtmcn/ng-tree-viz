import { Component, Input, OnInit, OnChanges } from '@angular/core';

import * as Company from '../types/company';

@Component({
  selector: 'app-selection',
  styleUrls: ['./selection.component.scss'],
  template: `
  <div>
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-5">Company</p>
          <p class="title is-3">{{ selctedCompany.Name }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-5">Symbol</p>
          <p class="title is-3">{{ selctedCompany.Symbol }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading is-5">Market Cap</p>
          <p class="title is-3">{{ selctedCompany['Market Cap'] }} B</p>
        </div>
      </div>
    </nav>
  </div>
  `
})
export class SelectionComponent implements OnInit, OnChanges {
  @Input() selctedCompany: Company.Details;
  constructor() {}

  ngOnInit() {
    this.selctedCompany = {};
    this.selctedCompany.Name = '';
    this.selctedCompany.Symbol = '';
    this.selctedCompany['Market Cap'] = 0;
  }
  ngOnChanges() {}
}
