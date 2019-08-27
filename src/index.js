import indexTemplate from '../public/index.html';
import App from './App.svelte';

function getIndexHtml() {
    let { html } = indexTemplate.render();
    return html;
}

function assertReplace(string, value, replacement) {
    let success = false;
    const result = string.replace(value, () => {
      success = true;
      return replacement;
    });
  
    if (!success) {
      throw new Error(
        `Unable to match replace token '${value}' in public/index.html template. If the HTML shell for the app is modified, also fix the replaces in server.js. Server-side rendering has failed!`
      );
    }
  
    return result;
  }
  

export function renderView(callback, path, data, viewBag) {
    const state = parseServerData(data, viewBag);

    let renderedApp = App.render({ path: path, routeData: state });

    const { html } = renderedApp;

    let indexHtml = getIndexHtml();

    indexHtml = assertReplace(
        indexHtml,
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
    );

    callback(null, { html: indexHtml });
}

function parseServerData(data, viewBag) {
    const parsedData = data instanceof Object ? data : JSON.parse(data);
    const parsedViewBag = viewBag instanceof Object ? viewBag : JSON.parse(viewBag);

    return {
        viewBag: parsedViewBag,
        sitecore: parsedData && parsedData.sitecore,
    };
}