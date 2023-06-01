import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPesquisaComponent } from './content-pesquisa.component';

describe('ContentPesquisaComponent', () => {
  let component: ContentPesquisaComponent;
  let fixture: ComponentFixture<ContentPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
