// import { describe, it, assert, withSubmit } from "./unit_test.js";
import { getLineTotal, getCartTotal } from "./prices.js";
import { buildReceipt } from "./checkout.js";

function formatItems(items) {
  if (items.length === 0) {
    return "  (empty cart)";
  }

  let lines = [];
  for (const item of items) {
    lines.push(`  * ${item.name} (Qty: ${item.quantity}, Price: ${item.price})`);
  }
  return lines.join("\n");
}

describe("receipt modules", () => {
  const runCases = [
    {
      items: [
        { name: "Apple", price: 4, quantity: 2 },
        { name: "Banana", price: 3, quantity: 1 },
      ],
      firstLineTotal: 8,
      cartTotal: 11,
      receipt: "Apple: 2 x 4 = 8\nBanana: 1 x 3 = 3\nTotal: 11",
    },
    {
      items: [{ name: "Notebook", price: 5, quantity: 3 }],
      firstLineTotal: 15,
      cartTotal: 15,
      receipt: "Notebook: 3 x 5 = 15\nTotal: 15",
    },
    {
      items: [
        { name: "Pen", price: 2, quantity: 4 },
        { name: "Marker", price: 6, quantity: 2 },
      ],
      firstLineTotal: 8,
      cartTotal: 20,
      receipt: "Pen: 4 x 2 = 8\nMarker: 2 x 6 = 12\nTotal: 20",
    },
  ];

  const submitCases = [
    ...runCases,
    {
      items: [],
      firstLineTotal: null,
      cartTotal: 0,
      receipt: "Total: 0",
    },
    {
      items: [
        { name: "Keyboard", price: 25, quantity: 2 },
        { name: "Mouse", price: 10, quantity: 3 },
        { name: "Cable", price: 5, quantity: 4 },
      ],
      firstLineTotal: 50,
      cartTotal: 100,
      receipt: "Keyboard: 2 x 25 = 50\nMouse: 3 x 10 = 30\nCable: 4 x 5 = 20\nTotal: 100",
    },
  ];

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    it(`Test ${i + 1}: receipt case`, () => {
      const inputText = formatItems(testCase.items);

      if (testCase.items.length > 0) {
        const lineResult = getLineTotal(testCase.items[0]);
        assert.strictEqual(
          lineResult,
          testCase.firstLineTotal,
          `Input:\n${inputText}\n\nExpected first line total: ${testCase.firstLineTotal}\nActual:                    ${lineResult}`
        );
      }

      const cartResult = getCartTotal(testCase.items);
      assert.strictEqual(
        cartResult,
        testCase.cartTotal,
        `Input:\n${inputText}\n\nExpected cart total: ${testCase.cartTotal}\nActual:              ${cartResult}`
      );

      const receiptResult = buildReceipt(testCase.items);
      assert.strictEqual(
        receiptResult,
        testCase.receipt,
        `Input:\n${inputText}\n\nExpected receipt:\n${testCase.receipt}\n\nActual receipt:\n${receiptResult}`
      );
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
