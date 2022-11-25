import {Cliente} from './Cliente.js'
import {CuentaCorriente} from "./cuentaCorrente.js"



const cliente = new Cliente();
cliente.nombreCliente='Leonardo';
cliente.dniCliente='13804050';
cliente.rutCliente='123224';


const cuentaLeonardo = new CuentaCorriente();
cuentaLeonardo.numero='1';
cuentaLeonardo.agencia='001';
cuentaLeonardo.cliente= cliente;



let saldo=cuentaLeonardo.verSaldo();

saldo=cuentaLeonardo.depositoEnCuenta(150);


const cliente2 = new Cliente();
cliente2.nombreCliente='Maria';
cliente2.dniCliente='16979808';
cliente2.rutCliente='8989';

const cuentaMaria = new CuentaCorriente();
cuentaMaria.numero='2';
cuentaMaria.agencia='002';
cuentaMaria.cliente= cliente2;

console.log(cuentaMaria);
let parametroValor= 100;

/*
cuentaLeonardo.transferirParaCuenta(100,cuentaMaria);
const saldoMaria= cuentaMaria.verSaldo();
console.log(`El saldo actual de Maria es ${saldoMaria}`);
const saldoLeonardo = cuentaLeonardo.verSaldo()
console.log(`El saldo actual de Maria es ${saldoLeonardo}`);*/