import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      imports: [
        HttpClientModule ,
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('tour-of-heroes-test', () => {

    //Teste pra verificar se "tour-of-heroes-test" é igual a mesma váriavel.
    it('deve imprimir "tour-of-heroes-test"', () =>{
      const message = "tour-of-heroes-test";
      expect(message).toBe("tour-of-heroes-test");
    });

    //Teste para verificar se a váriavel é nula.
    it('deve retornar "null"', () => {
      const value = null;
      expect(value).toBeNull();
    });

    //Teste para verificar se a lista contém um arrays especifico.
    it('deve conter "hero"', () => {
      const heroes = ['hero', 'villain'];
      expect(heroes).toContain('hero');
    });

    //Teste para verificar se a variável booleana é verdadeira.
    it('deve ser "true"', () => {
      const isHero = true;
      expect(isHero).toBeTrue();
    });

  });
  
});
