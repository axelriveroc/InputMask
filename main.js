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
    if (number === "Tab") {
        return;
    }
    e.preventDefault();
    handleInput(arrNumerosTarjeta, number, templateNumeroTarjeta)
    inputNumeroTarjeta.value = arrNumerosTarjeta.join('');
})

inputFechaVencimiento.addEventListener('keydown', (e)=>{
    let number = e.key;
    if (number === "Tab") {
        return;
    }
    e.preventDefault();
    handleInput(arrFechaVencimiento, number, templateFechaVencimiento)
    inputFechaVencimiento.value = arrFechaVencimiento.join('');
})

inputClaveTarjeta.addEventListener('keydown', (e)=>{
    let number = e.key;
    if (number === "Tab") {
        return;
    }
    e.preventDefault();
    handleInput(arrClaveTarjeta, number, templateClaveTarjeta)
    inputClaveTarjeta.value = arrClaveTarjeta.join('');
})

const handleInput = (arr, n, template)=>{

    const valoresAceptados = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 

    if (n === 'Backspace') {
        arr.pop();
        return;
    }
    if (valoresAceptados.includes(n) && arr.length + 1 <= template.length) {
            if (template[arr.length] === '-' || template[arr.length] === '/') {
                arr.push( template[arr.length], n )
            }else{
                arr.push(n)
            }
        
    }
}