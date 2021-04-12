import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcongresoComponent } from './projectcongreso.component';

describe('ProjectcongresoComponent', () => {
  let component: ProjectcongresoComponent;
  let fixture: ComponentFixture<ProjectcongresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcongresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
