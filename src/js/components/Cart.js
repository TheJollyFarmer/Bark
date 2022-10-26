export class Cart extends HTMLDivElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="cart__header">
        <span>Your Bag</span>
        <v-image
            name="close"
            type="icon"
            class="cart__close">
        </v-image>
      </div>
      <div class="cart__list">
        <div 
          is="v-cart-item"
          title="Natures Menu Dog Food Can Chicken"
          image="chicken"
          cost="22.81">
        </div>
        <div 
          is="v-cart-item"
          title="Natures Menu Dog Food Can Chicken"
          image="chicken"
          cost="22.81">
        </div>
        <div 
          is="v-cart-item"
          title="Natures Menu Dog Food Can Chicken"
          image="chicken"
          cost="22.81">
        </div>
        <div 
          is="v-cart-item"
          title="Natures Menu Dog Food Can Chicken"
          image="chicken"
          cost="22.81">
        </div>
        <div 
          is="v-cart-item"
          title="Natures Menu Dog Food Can Chicken"
          image="chicken"
          cost="22.81">
        </div>
      </div>
      <div class="cart__footer">
        <p class="cart__subtotal">Subtotal: £22.81</p>
        <button class="button cart__button">
          Proceed to Checkout
        </button>
        <a
          href=""
          class="cart__continue">
          Continue Shopping
        </a>
      </div>
    `;

    this.querySelector(".cart__close").addEventListener("click", closeCart);
  }

  disconnectedCallback() {
    this.querySelector(".cart__close").removeEventListener("click", closeCart);
  }
}

const spinner = document.querySelector(".spinner");
const overlay = document.querySelector(".overlay");
const cart = document.querySelector(".cart");

export const openCart = () => {
  spinner.classList.add("spinner--active");

  setTimeout(() => {
    spinner.classList.remove("spinner--active");
    cart.classList.add("cart--active");
    overlay.classList.add("overlay--active");
  }, 1000)
}

export const closeCart = () => {
  cart.classList.remove("cart--active");
  overlay.classList.remove("overlay--active");
}
