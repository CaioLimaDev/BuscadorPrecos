import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProdutoApresentacaoComponent} from './produto-apresentacao.component';

describe('ProdutoApresentacaoComponent', () => {
  let component: ProdutoApresentacaoComponent;
  let fixture: ComponentFixture<ProdutoApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoApresentacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
