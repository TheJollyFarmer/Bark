export class CartItem extends HTMLDivElement {
  connectedCallback() {
    const name = this.getAttribute("title");
    const image = this.getAttribute("image");
    const cost = this.getAttribute("cost");

    this.innerHTML = `
      <div class="cart__item">
        <v-image
          name="${image}"
          class="cart__image">
        </v-image>
        <div>
          <p>${name}</p>
          <p class="cart__cost">£${cost}</p>
          <a
              href=""
              class="cart__remove">
              Remove
          </a>
        </div>
      </div>
    `;
  }
}
