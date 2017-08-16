import { Component, Input, OnInit, OnChanges } from '@angular/core';

import * as Company from '../types/company';

@Component({
  selector: 'app-selection',
  styleUrls: ['./selection.component.scss'],
  template: `
  <div class="box">
  <nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Company</p>
      <p class="title">{{ selctedCompany.Name }}</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
  <div>
    <p class="heading">Symbol</p>
    <p class="title">{{ selctedCompany.Symbol }}</p>
  </div>
</div>
<div class="level-item has-text-centered">
<div>
  <p class="heading">Market Cap</p>
  <p class="title">{{ selctedCompany['Market Cap'] }}</p>
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
