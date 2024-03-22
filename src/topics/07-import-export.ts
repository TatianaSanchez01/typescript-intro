import { Product, taxCalculation } from "./06-function-destructuring"
const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'iPad',
        price: 300
    }
];

const [total, taxResult] = taxCalculation({products: shoppingCart, tax: 0.19});

console.log(`Total: ${total}\nTax: ${taxResult}`)