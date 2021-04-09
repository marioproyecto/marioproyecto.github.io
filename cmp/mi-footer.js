class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Mario Emmanuel 
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
