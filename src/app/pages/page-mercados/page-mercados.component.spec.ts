import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageMercadosComponent} from './page-mercados.component';

describe('PageMercadosComponent', () => {
  let component: PageMercadosComponent;
  let fixture: ComponentFixture<PageMercadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMercadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
