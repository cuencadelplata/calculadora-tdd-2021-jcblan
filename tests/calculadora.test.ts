import { expect } from 'chai';
import { Calculadora } from '../src/calculadora';

let cal = new Calculadora();
describe('Metodo Calculadora.Sumar', () => {
    it(' Suma dos numeros resulta en su suma', () => {  
        expect(cal.sumar(2, 2)).to.equal(4);
    });
    it(' Suma Entero y Decimal Resulta en Decimal', () => {
        expect(cal.sumar(0.5, 1)).to.equal(1.5);
    });
});

describe('Metodo Calculadora.Restar', () => {
    it(' Minuendo > Sustraendo resulta en positivo', () => {
        expect(cal.restar(5, 3)).to.equal(2);
    });
    it(' Minuendo < Sustraendo resulta en negativo', () => {
        expect(cal.restar(4, 6)).to.equal(-2);
    });
});

describe('Metodo Calculadora.Multiplicar', () => {
    it('Positivo por positivo resulta positivo', () => {
        expect(cal.multiplicar(1, 8)).to.equal(8);
    });
    it('Positivo por negativo resulta negativo', () => {
        expect(cal.multiplicar(-1, 8)).to.equal(-8);
    });
    it('Negativo por positivo resulta negativo', () => {
        expect(cal.multiplicar(1, -8)).to.equal(-8);
    });
    it('Negativo por negativo resulta positivo', () => {
        expect(cal.multiplicar(-1, -8)).to.equal(8);
    });
});

describe('Metodo Calculadora.Dividir', () => {
    it(' Dividendo no multiplo de divisor resulta en entero', () => {
        expect(cal.dividir(20, 3)).to.equal(6);
    });
    it(' Division por 0 resulta en undefined', () => {
        expect(cal.dividir(15, 0)).to.equal(undefined);
    });
});

describe('Metodo Calculadora.Potencia', () => {
    it(' Elevar un numero a un exponente resulta en su potencia', () => {
        expect(cal.potencia(2, 2)).to.equal(4);
    });
    it(' Elevar un numero a 1 resulta en el mismo numero', () => {
        expect(cal.potencia(2, 1)).to.equal(2);
    });
    it(' Elevar un numero a 0 resulta en 1', () => {
        expect(cal.potencia(2, 0)).to.equal(1);
    });
});