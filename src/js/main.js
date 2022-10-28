import { Card } from "./components/Card.js";
import { Cart } from "./components/Cart.js";
import { CartItem } from "./components/CartItem.js";
import { Image } from "./components/Image.js";
import { Nav } from "./components/Nav.js";

customElements.define('v-card', Card);
customElements.define('v-cart', Cart);
customElements.define("v-cart-item", CartItem)
customElements.define('v-image', Image);
customElements.define('v-nav', Nav);
