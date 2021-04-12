import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcotacytComponent } from './projectcotacyt.component';

describe('ProjectcotacytComponent', () => {
  let component: ProjectcotacytComponent;
  let fixture: ComponentFixture<ProjectcotacytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcotacytComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcotacytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
