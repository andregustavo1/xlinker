class textContainer extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());

        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', '/src/css/output.css');
        shadow.appendChild(linkElement);
    }

    build() {
        const textContainer = document.createElement('div');
        textContainer.setAttribute('class', 'font-lexend mt-[72px] grid place-items-center');

        const name = document.createElement('h1');
        name.setAttribute('class', 'text-3xl font-semibold');
        name.textContent = this.getAttribute('name');

        const description = document.createElement('p');
        description.setAttribute('class', 'text-gray-700');
        description.textContent = this.getAttribute('description');

        textContainer.appendChild(name);
        textContainer.appendChild(description);

        return textContainer;
    }
}

customElements.define('text-container', textContainer);