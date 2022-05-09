import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesListComponent } from './movimentacoes-list.component';

describe('MovimentacoesListComponent', () => {
  let component: MovimentacoesListComponent;
  let fixture: ComponentFixture<MovimentacoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
