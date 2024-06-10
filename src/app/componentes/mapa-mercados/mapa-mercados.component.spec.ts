import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMercadosComponent } from './mapa-mercados.component';

describe('MapaMercadosComponent', () => {
  let component: MapaMercadosComponent;
  let fixture: ComponentFixture<MapaMercadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaMercadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapaMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
