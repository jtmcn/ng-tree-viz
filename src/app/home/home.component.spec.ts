import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BarchartComponent } from '../charts/barchart/barchart.component';
import { ForceComponent } from '../charts/force/force.component';
import { SelectionComponent } from '../selection/selection.component';
import { IDataService } from '../data/data.interface';
import { DataServiceMock } from '../../testing/data.service.mock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          HomeComponent,
          BarchartComponent,
          ForceComponent,
          SelectionComponent
        ],
        providers: [{ provide: IDataService, useClass: DataServiceMock }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
