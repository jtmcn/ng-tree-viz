import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceChartComponent } from './force-chart.component';

describe('ForceComponent', () => {
  let component: ForceChartComponent;
  let fixture: ComponentFixture<ForceChartComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ForceChartComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceChartComponent);
    component = fixture.componentInstance;
    component.data = [];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
