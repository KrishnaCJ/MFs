import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";
console.log("Contaner!");
productMount(document.querySelector("#dev-products"));
cartMount(document.querySelector("#dev-cart"));
