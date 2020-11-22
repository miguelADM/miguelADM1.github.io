class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Miguel Ambrosio Domínguez`;
  }
}
customElements.define("mi-footer", MiFooter);
