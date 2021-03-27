class UncertainBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section class="callout unknown page">
                <div class="row">
                    <p>
                        The identification of this mushroom is uncertain.
                        If you have insights into whether it is correct or
                        not, plase visit GitHub to file an issue.
                    </p>
                    <a href="https://github.com/carljbowman/mushymushy" target=”_blank>
                        <button>Go to GitHub Repro →</button>
                    </a>
                </div>
            </section>
    `;
  }
}

customElements.define('uncertain-banner', UncertainBanner);
