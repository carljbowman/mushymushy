class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
                <div class="site-links">
                    <h4>Site</h4>
                    <ol>
                        <li>
                            <a class="arrow" href="../index.html">Home</a>
                        </li>
                        <li>
                            <a class="arrow" href="../unidentified.html">Unidentified</a>
                        </li>
                    </ol>
                </div>
                <div class="feedback">
                    <h4>Feedback (?)</h4>
                    <p>
                        See a mushroom that has been misidentified, notice some
                        information that doesn't look right, or have general feedback?
                        Visit the
                        <a href="https://github.com/carljbowman/mushymushy" target=”_blank>GitHub repository</a>
                        and file an issue with your feedback.
                    </p>
                </div>
        </footer>
    `;
  }
}

customElements.define('site-footer', Footer);
