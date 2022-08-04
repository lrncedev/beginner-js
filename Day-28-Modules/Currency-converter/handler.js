import { convert } from "./lib.js";
import { formatCurrency } from "./utils.js";
import { fromInput, fromSelect, toSelect, toInput } from "./elements.js";

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toInput.textContent = formatCurrency(rawAmount, toSelect.value);
}
