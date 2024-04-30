/*
 Author: Patricia Medina<patriciamedinameneses@gmail.com>
 Final Test: Bases de javascript
 Date: 01/05/2024
 University: USIP
*/

// Usando la API https://www.exchangerate-api.com 
const URL_CURRENCY = 'https://v6.exchangerate-api.com/v6/e44fd60494acd8e78f880235/latest/BOB'

const SELECT_DE = document.getElementById('de');
const SELECT_A = document.getElementById('a');

async function getCurrencies(){
  const response = await fetch(URL_CURRENCY);
  const data = await response.json();
  return data;
}

/* Completando los 2 select con las monedas disponibles al cargar la página*/
document.addEventListener('DOMContentLoaded', async function(){
  const currencies = await getCurrencies();
  for (currency in currencies.conversion_rates){
    SELECT_DE.innerHTML += `<option value=${currency} data-currency=${currency}>${currency}</option>`
  }
  for (currency in currencies.conversion_rates){
    SELECT_A.innerHTML += `<option value=${currency} data-currency=${currency}>${currency}</option>`
  } 
}) 

const btn = document.getElementById('calcular');

btn.addEventListener('click', () => {
  const convertir_de = SELECT_DE.getAttribute('data-currency');
const convertir_a = document.getElementById('a').getAttribute('data-currency');
console.log(convertir_de)  
alert(`Mensaje de prueba...${convertir_de}`);
  
})