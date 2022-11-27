const inputNumeroTarjeta = document.getElementById('numTarjeta');
const inputFechaVencimiento = document.getElementById('fechaVencimiento'); 
const inputClaveTarjeta = document.getElementById('claveTarjeta');

let templateNumeroTarjeta = '####-####-####-####';
let templateFechaVencimiento = '##/##';
let templateClaveTarjeta = '###';

let current=""; 
let arrNumerosTarjeta = []; 
let arrFechaVencimiento = [];
let arrClaveTarjeta = []; 

inputNumeroTarjeta.addEventListener('keydown', (e)=>{
    let numero = e.key;
    arrNumerosTarjeta.push(numero) 
    inputNumeroTarjeta.value = current
    if (templateNumeroTarjeta[arrNumerosTarjeta.length] === '-' ) {
            arrNumerosTarjeta.push('-')
        }
    
    if (arrNumerosTarjeta.length >= 19) {
            inputNumeroTarjeta.value = current
            return current
    }
    current = arrNumerosTarjeta.join('')

    //renderNumero(templateNumeroTarjeta, key, arrNumerosTarjeta);
    console.log(arrNumerosTarjeta)
  
    console.log(current)
    //e.preventDefault();
})

