import 'reflect-metadata';
import { expect } from 'chai';
import { container } from 'tsyringe';
import { CalculadoraManager } from '../src/CalculadoraManager'; 

describe('CalculadoraManager.sumar', () => {
    it('Manager suma 2 + 2 debera ser 4', () => {  
        let mnger = container.resolve(CalculadoraManager);
        expect(mnger.sumar(2, 2)).to.equal(4);
    });
});