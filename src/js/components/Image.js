export class Image extends HTMLElement {
  connectedCallback() {
    const base = "../../../dist/assets/images/";
    const type = this.getAttribute("type");
    const isIcon = type === "icon";
    const path = isIcon ? "icons/" : "";
    const name = this.getAttribute("name");
    const ext = isIcon ? ".svg" : ".png"
    const src = set => base + path + name + (set ?? "") + ext;
    const alt = `The ${name} image`;

    this.innerHTML = `
      <figure class="image">
          <img
            src="${src()}"
            alt="${alt}">
      </figure>
    `;

    if (!isIcon) {
      this.getElementsByTagName("img")[0].srcset = src("@2x") + " 2x";
    }
  }
}
