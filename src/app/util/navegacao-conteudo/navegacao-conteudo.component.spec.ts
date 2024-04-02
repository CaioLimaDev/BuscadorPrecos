import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoConteudoComponent } from './navegacao-conteudo.component';

describe('NavegacaoConteudoComponent', () => {
  let component: NavegacaoConteudoComponent;
  let fixture: ComponentFixture<NavegacaoConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacaoConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegacaoConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
