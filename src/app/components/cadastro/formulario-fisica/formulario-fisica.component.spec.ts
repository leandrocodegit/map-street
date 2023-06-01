import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFisicaComponent } from './formulario-fisica.component';

describe('FormularioFisicaComponent', () => {
  let component: FormularioFisicaComponent;
  let fixture: ComponentFixture<FormularioFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFisicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
