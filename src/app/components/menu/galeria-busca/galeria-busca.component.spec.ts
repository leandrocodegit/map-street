import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaBuscaComponent } from './galeria-busca.component';

describe('GaleriaBuscaComponent', () => {
  let component: GaleriaBuscaComponent;
  let fixture: ComponentFixture<GaleriaBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
