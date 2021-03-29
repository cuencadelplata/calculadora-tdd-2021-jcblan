import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { Calculadora } from './calculadora';


@injectable()
export class CalculadoraManager{
    _calculadora: Calculadora;

    constructor(calc: Calculadora){
        this._calculadora = calc;
    }

    sumar(a: number, b: number){
        return this._calculadora.sumar(a, b);
    }
}