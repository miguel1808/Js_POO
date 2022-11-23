
class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente{
    numero;
    saldo;
    agencia;

    depositoEnCuenta(valor){
        this.saldo = this.saldo+valor;
    }
}

const cliente1= new Cliente();

cliente1.nombreCliente="Jose";
cliente1.dniCliente="213232";
cliente1.rutCliente="V151515"

const CuentaCorriente1 = new CuentaCorriente();

CuentaCorriente1.numero="232323";
CuentaCorriente1.saldo=2000;
CuentaCorriente1.agencia=1001;

const cliente2 = new Cliente();

cliente2.nombreCliente ="Leonardo";
cliente2.dniCliente ="13804050";
cliente2.rutCliente="V161616";

const CuentaCorriente2 = new CuentaCorriente();

CuentaCorriente2.numero = "123434343";
CuentaCorriente2.saldo = 1000;
CuentaCorriente2.agencia=1002;

console.log(cliente1);
console.log(CuentaCorriente1);
console.log(cliente2);
console.log(CuentaCorriente2);

CuentaCorriente2.depositoEnCuenta(1200);
console.log(CuentaCorriente2.saldo);