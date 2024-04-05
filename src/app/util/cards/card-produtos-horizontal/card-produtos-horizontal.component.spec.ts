import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutosHorizontalComponent } from './card-produtos-horizontal.component';

describe('CardProdutosHorizontalComponent', () => {
  let component: CardProdutosHorizontalComponent;
  let fixture: ComponentFixture<CardProdutosHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProdutosHorizontalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProdutosHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
