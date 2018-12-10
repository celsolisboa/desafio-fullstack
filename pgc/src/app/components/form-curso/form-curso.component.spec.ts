import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCursoComponent } from './form-curso.component';

describe('FormCursoComponent', () => {
  let component: FormCursoComponent;
  let fixture: ComponentFixture<FormCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
