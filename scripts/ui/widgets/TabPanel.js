/**
 * Expects an array of HTMLElements to manage.
 * Each array element may be:
 *    - a string
 *          The ID of the element, not including the #.
 *    - an HTMLElement reference
 *          The actual element itself to manage
 *    - a config object, with any of the following keys:
 *        - element: string | HTMLElement
 *              The element, as the above non-object options.
 *        - label: string
 *              The text to display to the user for this tab.
 */

export default class TabPanel {
    /**
     *
     * @param {object} config
     * @param {(string | !HTMLElement)} config.parent
     * @param {(string | !HTMLElement | { label: string, element: (string | !HTMLElement)})[]} config.tabs
     */
    constructor(config) {
        TabPanel._validateConfig(config);

        this.parent = TabPanel._getHtmlElementReference(config.parent);

        this.tabs = config.tabs.map(tab => {
            tab = TabPanel._getHtmlElementReference(tab);

            if (tab instanceof HTMLElement)
                return {element: tab};

            tab.element = TabPanel._getHtmlElementReference(tab.element);
            return tab;
        });
        this.tabs.forEach(tab =>
            tab.label = tab.label || tab.element.id,
        );

        this.render();
    }

    render() {
        const tabPanelWrapperDivElement = document.createElement('div');
        tabPanelWrapperDivElement.className = 'panel-wrapper vbox';

        const tabsBarDivElement = document.createElement('div');
        tabsBarDivElement.className = 'panel-title tab-bar hbox';

        const tabPanelBodyDivElement = document.createElement('div');
        tabPanelBodyDivElement.className = 'panel-body';

        this.tabs.forEach(tab => {
            tab.element.style.display = 'none';
            tabPanelBodyDivElement.appendChild(tab.element);

            if (tab.noButton) return;

            tab.button = document.createElement('button');
            tab.button.className = 'tab-button';
            tab.button.innerHTML = tab.label;

            const self = this;
            tab.button.onclick = function () {
                self.activateTab(tab);
            };

            tabsBarDivElement.appendChild(tab.button);
        });

        this.activateTab(0);

        tabPanelWrapperDivElement.appendChild(tabsBarDivElement);
        tabPanelWrapperDivElement.appendChild(tabPanelBodyDivElement);
        this.parent.appendChild(tabPanelWrapperDivElement);
    }

    activateTab(newActiveTab) {
        if (typeof newActiveTab == 'number')
            newActiveTab = this.tabs[newActiveTab];

        this.tabs.forEach(tab => {
            if (tab != newActiveTab) {
                tab.element.style.display = 'none';
                if (tab.button) tab.button.classList.remove('active');
            }
        });

        newActiveTab.element.style.display = 'inline-block';
        if (newActiveTab.button) newActiveTab.button.classList.add('active');
        if (newActiveTab.onShow) newActiveTab.onShow();
    }

    static _validateConfig(config) {
        if (!config.parent || !config.tabs) throw new Error();
        if (typeof config.parent != 'string' && ! (config.parent instanceof HTMLElement))
            throw new Error(`TabPanel \`parent\` config has unexpected type: ${typeof config.parent}`);
        if (!Array.isArray(config.tabs)) throw new Error();
    }

    static _getHtmlElementReference(element) {
        if (typeof element == 'string')
            return document.getElementById(element);
        return element;
    }
}