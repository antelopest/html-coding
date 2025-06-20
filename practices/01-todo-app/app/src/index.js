import './styles/main.scss';

// import Home from './views/home.js';
// import About from './views/about.js';
// import NotFound from './views/notfound.js';
//
// const routes = {
//   '/': Home,
//   '/about': About
// };
//
// const render = () => {
//   const path = window.location.pathname;
//   const view = routes[path] || NotFound;
//   document.getElementById('app').innerHTML = view();
// };
//
// const navigateTo = (url) => {
//   history.pushState(null, null, url);
//   render();
// };
//
// window.addEventListener('popstate', render);
//
// document.addEventListener('DOMContentLoaded', () => {
//   document.body.addEventListener('click', (e) => {
//     const target = e.target.closest('a[data-link]');
//     if (target) {
//       e.preventDefault();
//       navigateTo(target.href);
//     }
//   });
//
//   render();
// });
