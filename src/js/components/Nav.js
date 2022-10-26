import {closeCart, openCart} from "./Cart.js";

export class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="nav">
        <v-image 
            name="logo"
            type="icon" 
            class="nav__image">
        </v-image>
        <v-image 
            name="bag" 
            type="icon" 
            class="nav__icon">
        </v-image>
      </nav>
    `;

    this.querySelector(".nav__icon").addEventListener("click", openCart);
  }

  disconnectedCallback() {
    this.querySelector(".nav__icon").removeEventListener("click", openCart);
  }
}
