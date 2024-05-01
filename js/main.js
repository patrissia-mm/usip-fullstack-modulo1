/*
 Author: Patricia Medina<patriciamedinameneses@gmail.com>
 Final Test: Bases de javascript
 Date: 01/05/2024
 University: USIP
*/

// Usando la API https://www.exchangerate-api.com
const URL_CURRENCY =
  "https://v6.exchangerate-api.com/v6/e44fd60494acd8e78f880235/latest/BOB";

let url_currency_convert =
  "https://v6.exchangerate-api.com/v6/e44fd60494acd8e78f880235/pair/";

const SELECT_DE = document.getElementById("de");
const SELECT_A = document.getElementById("a");

async function getCurrencies() {
  const response = await fetch(URL_CURRENCY);
  const data = await response.json();
  return data;
}

async function convertCurrency(convertir_de, convertir_a, monto) {
  url_currency_convert =
  "https://v6.exchangerate-api.com/v6/e44fd60494acd8e78f880235/pair/";
  url_currency_convert += convertir_de + "/";
  url_currency_convert += convertir_a + "/";
  url_currency_convert += monto;
  const response = await fetch(url_currency_convert);
  const data = await response.json();
  return data.conversion_result;
}

/* Completando los 2 select con las monedas disponibles al cargar la página*/
document.addEventListener("DOMContentLoaded", async function () {
  const currencies = await getCurrencies();
  for (currency in currencies.conversion_rates) {
    SELECT_DE.innerHTML += `<option value=${currency}>${currency}</option>`;
  }
  for (currency in currencies.conversion_rates) {
    SELECT_A.innerHTML += `<option value=${currency}>${currency}</option>`;
  }
});

const btn = document.getElementById("calcular");

btn.addEventListener("click", async () => {
  const convertir_de = document.getElementById("de").value;
  const convertir_a = document.getElementById("a").value;
  const monto = document.getElementById("monto").value;
  const resultado = await convertCurrency(convertir_de, convertir_a, monto);
  if (resultado) {
    document.getElementById("respuesta").value = resultado + " " + convertir_a;
  } else {
    document.getElementById("respuesta").value = "No logré hacer la conversión";
  }
});
