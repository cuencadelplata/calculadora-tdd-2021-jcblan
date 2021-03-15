const expect = require('chai').expect;
const Calculadora = require('../src/calculadora');


describe('Sumar', () => {
    it(' 2 + 2 = 4', () => {
        let cal = new Calculadora();
        expect(cal.sumar(2, 2)).to.equal(4);
    });
    it(' 0.5 + 1 = 1.5', () => {
        let cal = new Calculadora();
        expect(cal.sumar(0.5, 1)).to.equal(1.5);
    });
});

describe('Restar', () => {
    it(' 5 - 3 = 2', () => {
        let cal = new Calculadora();
        expect(cal.restar(5, 3)).to.equal(2);
    });
    it(' 4 - 6 = -2', () => {
        let cal = new Calculadora();
        expect(cal.restar(4, 6)).to.equal(-2);
    });
});

describe('Multiplicar', () => {
    it(' 1 * 8 = 8', () => {
        let cal = new Calculadora();
        expect(cal.multiplicar(1, 8)).to.equal(8);
    });
    it(' -1 * 8 = -8', () => {
        let cal = new Calculadora();
        expect(cal.multiplicar(-1, 8)).to.equal(-8);
    });
    it(' 1 * -8 = -8', () => {
        let cal = new Calculadora();
        expect(cal.multiplicar(1, -8)).to.equal(-8);
    });
    it(' -1 * -8 = 8', () => {
        let cal = new Calculadora();
        expect(cal.multiplicar(-1, -8)).to.equal(8);
    });
});

describe('Dividir', () => {
    it(' 20 / 3 = 6', () => {
        let cal = new Calculadora();
        expect(cal.dividir(20, 3)).to.equal(6);
    });
    it(' 15 / 0 = NaN', () => {
        let cal = new Calculadora();
        expect(cal.dividir(15, 0)).to.equal(undefined);
    });
});