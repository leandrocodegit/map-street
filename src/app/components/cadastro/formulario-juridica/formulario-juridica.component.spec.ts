import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJuridicaComponent } from './formulario-juridica.component';

describe('FormularioJuridicaComponent', () => {
  let component: FormularioJuridicaComponent;
  let fixture: ComponentFixture<FormularioJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioJuridicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
