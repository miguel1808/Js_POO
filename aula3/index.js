import {Cliente} from './Cliente.js'
import {CuentaCorriente} from "./cuentaCorrente.js"



const cliente = new Cliente('Leonardo','13804050','123224');


const cuentaLeonardo = new CuentaCorriente(cliente,'1','001');



let saldo=cuentaLeonardo.verSaldo();

saldo=cuentaLeonardo.depositoEnCuenta(150);


const cliente2 = new Cliente('Maria','16979808','8989');


const cuentaMaria = new CuentaCorriente(cliente2,'2','002');

console.log(cuentaLeonardo.cliente);
console.log(cuentaMaria.cliente)
/*
cuentaLeonardo.transferirParaCuenta(100,cuentaMaria);
const saldoMaria= cuentaMaria.verSaldo();
console.log(`El saldo actual de Maria es ${saldoMaria}`);
const saldoLeonardo = cuentaLeonardo.verSaldo()
console.log(`El saldo actual de Maria es ${saldoLeonardo}`);*/