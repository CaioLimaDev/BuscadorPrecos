import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselMercadosComponent } from './carrossel-mercados.component';

describe('CarrosselMercadosComponent', () => {
  let component: CarrosselMercadosComponent;
  let fixture: ComponentFixture<CarrosselMercadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselMercadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosselMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
