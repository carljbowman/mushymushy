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
                    </ol>
                </div>
                <div class="feedback">
                    <h4>Feedback (?)</h4>
                    <p>
                        See a mushroom that has been misidentified, some information
                        that doesn't look right, or have general feedback?
                        Check out the
                        <a href="https://github.com/carljbowman/mushrooms" target=”_blank>GitHub repository</a>
                        and file an issue with your feedback.
                    </p>
                </div>
        </footer>
    `;
  }
}

customElements.define('site-footer', Footer);
