import faker from "faker";

const cartText = `<div>your cart has ${faker.random.number()} items</div>`;

document.querySelector("#dev-cart").innerHTML = cartText;

export const mount = (el) => {
  const cartText = `<div>your cart has ${faker.random.number()} items</div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}
