import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaHorarioComponent } from './tabela-horario.component';

describe('TabelaHorarioComponent', () => {
  let component: TabelaHorarioComponent;
  let fixture: ComponentFixture<TabelaHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaHorarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
