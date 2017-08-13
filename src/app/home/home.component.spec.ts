import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BarchartComponent } from '../charts/barchart/barchart.component';
import { ForceComponent } from '../charts/force/force.component';
// import { DataService } from '../data/data.service';
import { IDataService } from '../types/data.interface';
import { DataServiceMock } from '../../testing/data.service.mock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, BarchartComponent, ForceComponent],
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
