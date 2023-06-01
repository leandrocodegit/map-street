import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaContentDetalhesComponent } from './galeria-content-detalhes.component';

describe('GaleriaContentDetalhesComponent', () => {
  let component: GaleriaContentDetalhesComponent;
  let fixture: ComponentFixture<GaleriaContentDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaContentDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaContentDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
