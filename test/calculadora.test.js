const expect = require('chai').expect;
const Calculadora = require('../src/calculadora');

let cal = new Calculadora();
describe('Sumar', () => {
    it(' 2 + 2 = 4', () => {  
        expect(cal.sumar(2, 2)).to.equal(4);
    });
    it(' 0.5 + 1 = 1.5', () => {
        expect(cal.sumar(0.5, 1)).to.equal(1.5);
    });
});

describe('Restar', () => {
    it(' 5 - 3 = 2', () => {
        expect(cal.restar(5, 3)).to.equal(2);
    });
    it(' 4 - 6 = -2', () => {
        expect(cal.restar(4, 6)).to.equal(-2);
    });
});

describe('Multiplicar', () => {
    it(' 1 * 8 = 8', () => {
        expect(cal.multiplicar(1, 8)).to.equal(8);
    });
    it(' -1 * 8 = -8', () => {
        expect(cal.multiplicar(-1, 8)).to.equal(-8);
    });
    it(' 1 * -8 = -8', () => {
        expect(cal.multiplicar(1, -8)).to.equal(-8);
    });
    it(' -1 * -8 = 8', () => {
        expect(cal.multiplicar(-1, -8)).to.equal(8);
    });
});

describe('Dividir', () => {
    it(' 20 / 3 = 6', () => {
        expect(cal.dividir(20, 3)).to.equal(6);
    });
    it(' 15 / 0 = NaN', () => {
        expect(cal.dividir(15, 0)).to.equal(undefined);
    });
});