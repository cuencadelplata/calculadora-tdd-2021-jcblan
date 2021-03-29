import { expect } from 'chai';
import { Calculadora } from '../src/calculadora';
import { ISabeSumar } from '../src/ISabeSumar';


function comprobarInterface(arg: Calculadora){
        return (arg as ISabeSumar).sumar(2,2) !== undefined;
}

describe('ISabeSumar', () => {
    it('Calculadora implementa ISabeSumar debera ser true', () => {  
        let cal = new Calculadora();
        expect( comprobarInterface(cal)).to.equal(true);
    });
});
