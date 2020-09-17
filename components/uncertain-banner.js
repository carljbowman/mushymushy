class UncertainBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section class="callout uncertain page">
                <div class="row">
                    <p>
                        The identification of this mushroom is uncertain.
                        If you have insights, either if this is correct or
                        incorrect, check out GitHub to file an issue.
                    </p>
                    <a href="https://github.com/carljbowman/mushymushy" target=”_blank>
                        <button>Go to GitHub Repro</button>
                    </a>
                </div>
            </section>
    `;
  }
}

customElements.define('uncertain-banner', UncertainBanner);
