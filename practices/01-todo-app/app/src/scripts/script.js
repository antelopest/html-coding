const routes = {
  '/today': '/views/today.html'
};

const render = async () => {
  console.log('123');

  const path = location.pathname;
  const view = routes[path] || '/views/today.html';

  const res = await fetch(view);
  const html = await res.text();
  document.getElementById('app').innerHTML = html;
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  render();
};

document.addEventListener('click', (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

window.addEventListener('popstate', render);

window.addEventListener('DOMContentLoaded', render);
