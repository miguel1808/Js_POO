
class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente{
    numero;
    saldo;
    agencia;

    constructor(){
        this.saldo=0;
        this.numero='';
        this.agencia='';
    }

    depositoEnCuenta(valor){
        this.saldo = this.saldo+valor;
    }
    retirarDeCuenta(valor){
        this.saldo =this.saldo-valor;
    }
}

const cuantaLeonardo = new CuentaCorriente();
cuantaLeonardo.depositoEnCuenta(100);
console.log(cuantaLeonardo);
cuantaLeonardo.retirarDeCuenta(50);
console.log(cuantaLeonardo);