import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TreeChartComponent } from '../tree-chart/tree-chart.component';
import { SelectionComponent } from '../selection/selection.component';
import { IDataService } from '../data/data.interface';
import { DataServiceMock } from '../../testing/data.service.mock';
import * as Chart from '../types/chart';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, TreeChartComponent, SelectionComponent],
        providers: [{ provide: IDataService, useClass: DataServiceMock }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    // component.chartData = partialData;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
