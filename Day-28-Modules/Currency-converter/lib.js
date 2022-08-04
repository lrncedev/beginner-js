const endpoint = "https://api.exchangerate.host/latest";
const ratesByBase = {};

export async function fetchRates(base = "USD") {
  const res = await fetch(`${endpoint}?base=${base}`);
  const data = await res.json();
  return data;
}
export async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
  }

  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
