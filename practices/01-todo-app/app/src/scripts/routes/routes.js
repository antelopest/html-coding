import SidebarComponent from '../components/sidebar/sidebar.component.js';
import TodayComponent from '../components/today/today.component.js';
import NotFoundComponent from '../components/notfound/notfound.component.js';
import CalendarComponent from '../components/calendar/calendar.component.js';

const app = document.getElementById('app');

export const routes = {
  '': TodayComponent,
  '/today': TodayComponent,
  '/calendar': CalendarComponent
  // '/events': '/events.html',
  // '/tasks': '/tasks.html',
  // '/tags': '/tags.html'
};

async function loadView(path) {}

const render = () => {
  const path = window.location.hash.slice(1);
  let view = '';

  if (Object.keys(routes).includes(path)) {
    view = SidebarComponent() + routes[path]();
  } else {
    view = NotFoundComponent();
  }

  app.innerHTML = view;
};

const navigateTo = (url) => {
  history.pushState(null, null, url);

  render();
};

window.addEventListener('popstate', render);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('a[data-link]');
    if (target) {
      e.preventDefault();
      navigateTo(target.href);
    }
  });

  render();
});

window.addEventListener('load', () => {
  navigateTo('#/today');
});
