//Currency list for select options
const currencies = {
  USD: "United States Dollar",
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  CZK: "Czech Republic Koruna",
  DKK: "Danish Krone",
  GBP: "British Pound Sterling",
  HKD: "Hong Kong Dollar",
  HRK: "Croatian Kuna",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Zloty",
  RON: "Romanian Leu",
  RUB: "Russian Ruble",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  ZAR: "South African Rand",
  EUR: "Euro",
};

// ELEMENTS
const form = document.querySelector(".app form");
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toInput = document.querySelector(".to_amount");

const endpoint = "https://api.exchangerate.host/latest";

//Caching
const ratesByBase = {};

//Fetch the API with base value of USD
async function fetchRates(base = "USD") {
  const res = await fetch(`${endpoint}?base=${base}`);
  const data = await res.json();
  return data;
}

//Populate function for select options
function generateOptions(options) {
  return Object.entries(options)
    .map(([currencyCode, currencyName]) => {
      return `<option value="${currencyCode}"> ${currencyCode} - ${currencyName}</<option>`;
    })
    .join("");
}

//Currency converter with Number Format API
function formatCurrency(amount, currency) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/*
  Checks if the the currency is already cached,
  if not, fetch it.

  Converts the amout by using [from] property and [to] property in the ratesbyBase object
*/
async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    const rates = await fetchRates(from);
    // store them for next time
    ratesByBase[from] = rates;
  }
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

//Callback function for event listener "input"
async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  console.log(rawAmount);
  toInput.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);

toSelect.innerHTML = optionsHTML;
fromSelect.innerHTML = optionsHTML;

// console.log(ratesByBase);

form.addEventListener("input", handleInput);
