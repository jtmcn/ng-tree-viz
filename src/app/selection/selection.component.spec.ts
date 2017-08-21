import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionComponent } from './selection.component';

describe('SelectionComponent', () => {
  let component: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SelectionComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionComponent);
    component = fixture.componentInstance;
    component.selctedCompany = {
      Name: '',
      Ticker: '',
      Sector: ''
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
