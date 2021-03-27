class UnidentifiedBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section class="callout unknown page">
                <div class="row">
                    <p>
                        If you can help identify this mushroom, visit the
                        GitHub repro and file an issue.
                    </p>
                    <a href="https://github.com/carljbowman/mushymushy" target=”_blank>
                        <button>Go to GitHub Repro →</button>
                    </a>
                </div>
            </section>
    `;
  }
}

customElements.define('unidentified-banner', UnidentifiedBanner);
