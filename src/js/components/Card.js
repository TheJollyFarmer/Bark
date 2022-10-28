export class Card extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <v-image
        name="chicken"
        class="card__image">
      </v-image>
      <div class="card__body">
        <p class="card__label">Natures Menu Dog Food Can Chicken</p>
        <p class="card__cost">£22.81</p>
        <button class="button card__button">
          Add to Bag
        </button>
      </div>
    `;
  }
}
