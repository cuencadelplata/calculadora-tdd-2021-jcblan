
class Calculadora{
    constructor()
    {

    }

    sumar( a, b ){
        return a + b;
    }

    restar( a, b ){
        return a - b;
    }

    multiplicar( a , b ){
        let producto = 0;
        /********************************* */
        // Logica para regla de signos
        if(Math.sign(b) == -1){
            let aux = a;
            a = b;
            b = aux;
        }
        if ((Math.sign(a) == -1) && (Math.sign(b) == -1)){
            a = Math.abs(a);
            b = Math.abs(b);
        }
        /********************************* */
        for(let x = 0; x < Math.abs(b); x++ ){
            producto += a;
        }
        return producto;
    }

    dividir( a, b ){
        let cociente = 0;
        if( b == 0){
            return undefined;
        }else{
            while(a > b){
                a -= b
                cociente++;
            }
            return cociente;
        }

    }

    potencia( a, b){
        return a ** b;
    }
}

module.exports = Calculadora;