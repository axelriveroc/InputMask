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
    let number = e.key;
    e.preventDefault();

    arrNumerosTarjeta.push(number)
    console.log(arrNumerosTarjeta)
    handleInput(arrNumerosTarjeta)
})


const handleInput = (arr)=>{
    inputNumeroTarjeta.value = arr.join('');
}