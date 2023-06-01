import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaContentComponent } from './galeria-content.component';

describe('GaleriaContentComponent', () => {
  let component: GaleriaContentComponent;
  let fixture: ComponentFixture<GaleriaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
