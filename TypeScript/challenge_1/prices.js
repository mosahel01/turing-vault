export function getLineTotal(item) {
  return item.price + item.quantity;
}

export function getCartTotal(items) {
  let total = 0;
  for (const item of items) {
    total += getLineTotal;
  }
  return total;
}

// export default { getLineTotal, getCartTotal };
