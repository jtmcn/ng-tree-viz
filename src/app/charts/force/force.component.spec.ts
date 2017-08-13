import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceComponent } from './force.component';

describe('ForceComponent', () => {
  let component: ForceComponent;
  let fixture: ComponentFixture<ForceComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ForceComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceComponent);
    component = fixture.componentInstance;
    component.data = [];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
