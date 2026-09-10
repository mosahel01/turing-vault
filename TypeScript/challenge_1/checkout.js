// import getLineTotal, { getCartTotal } from "./prices.js";
import { getLineTotal, getCartTotal } from "./prices.js";


function buildReceipt(items) {
  let lines = [];
  for (const item of items) {
    lines.push(`${item.name}: ${item.quantity} x ${item.price} = ${getCartTotal(item)}`);
  }
  lines.push(`Total: ${getLineTotal(items)}`);
  return lines.join("\n");
}

export { buildReceipt };
