import * as url from 'node:url';

export class Router {
  #routes = [];

  add(pathPattern, viewPath) {
    const paramNames = [];
    const regex = pathPattern
      .replace(/:([^/]+)/g, (_, key) => {
        paramNames.push(key);
        return '([^/]+)';
      })
      .replace(/\//g, '\\/');

    const pattern = new RegExp(`^${regex}$`);

    this.#routes.push({ pathPattern, viewPath, pattern, paramNames });
  }

  go(path) {
    history.pushState(null, null, path);
    this.#notify(path);
  }
}
