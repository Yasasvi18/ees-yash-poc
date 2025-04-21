// API Key-Free Currency Rate API (e.g., ExchangeRate.host)
const CURRENCY_API = "https://api.exchangerate.host/latest";

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const currencyAmount = document.getElementById("currency-amount");
const currencyResult = document.getElementById("currency-result");

// Fetch currency symbols and populate dropdowns
async function populateCurrencies() {
  try {
    const res = await fetch("https://api.exchangerate.host/symbols");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    if (!data.symbols) {
      throw new Error("No symbols found in API response");
    }
    const symbols = data.symbols;
    for (let code in symbols) {
      fromCurrency.innerHTML += `<option value="${code}">${code}</option>`;
      toCurrency.innerHTML += `<option value="${code}">${code}</option>`;
    }
    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
  } catch (error) {
    console.error("Error populating currencies:", error);
  }
}
populateCurrencies();

// Convert currency on input
currencyAmount.addEventListener("input", convertCurrency);
fromCurrency.addEventListener("change", convertCurrency);
toCurrency.addEventListener("change", convertCurrency);

async function convertCurrency() {
  const amount = currencyAmount.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount) return;

  const res = await fetch(`${CURRENCY_API}?base=${from}&symbols=${to}`);
  const data = await res.json();
  const rate = data.rates[to];
  const result = (rate * amount).toFixed(2);
  currencyResult.innerText = `${amount} ${from} = ${result} ${to}`;
}

// Weight conversion
const weightInput = document.getElementById("weight-input");
const fromWeight = document.getElementById("from-weight");
const toWeight = document.getElementById("to-weight");
const weightResult = document.getElementById("weight-result");

const weightFactors = {
  kg: 1,
  g: 1000,
  lb: 2.20462,
  oz: 35.274
};

function convertWeight() {
  const value = parseFloat(weightInput.value);
  const from = fromWeight.value;
  const to = toWeight.value;

  if (isNaN(value)) return;

  const baseKg = value / weightFactors[from]; // Convert to kg
  const result = baseKg * weightFactors[to];

  weightResult.innerText = `${value} ${from} = ${result.toFixed(2)} ${to}`;
}

weightInput.addEventListener("input", convertWeight);
fromWeight.addEventListener("change", convertWeight);
toWeight.addEventListener("change", convertWeight);
