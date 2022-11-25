
class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente{
    numero;
    #saldo;
    agencia;

    constructor(){
        this.#saldo=0;
        this.numero='';
        this.agencia='';
    }

    depositoEnCuenta(valor){
        if(valor>0){
            this.#saldo = this.#saldo+valor;
        }
        return this.#saldo;
        
    }
    retirarDeCuenta(valor){
        if(valor <= this.#saldo){
            this.#saldo =this.#saldo-valor;
        }
        return this.#saldo;
    }
    verSaldo(){
        return this.#saldo;
    }
}

const cuantaLeonardo = new CuentaCorriente();
let saldo=cuantaLeonardo.verSaldo();
console.log(`El saldo acturl es ${saldo}`);
saldo=cuantaLeonardo.depositoEnCuenta(100);

console.log(`El saldo acturl es ${saldo}`);
saldo=cuantaLeonardo.retirarDeCuenta(10);

console.log(`El saldo acturl es ${saldo}`);