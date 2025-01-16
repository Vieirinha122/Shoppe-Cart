import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = []; 
const myWhishlist = [];

console.log("Welcome to the your Shoppe Cart!") 

const item1 = await createItem("Camisa Nike", 40.00, 2); 
const item2 = await createItem("Calça Jeans", 90.00, 1); 

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1)

await cartService.displayCart(myCart)

// await cartService.deleteItem(myCart, item2.name); 


await cartService.calculateTotal(myCart);
