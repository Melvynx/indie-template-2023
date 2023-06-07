const localStorageTheme = localStorage.getItem('usehooks-ts-dark-mode');

const body = document.body;

if (localStorageTheme === 'true') {
  body.classList.add('dark');
}

if (localStorageTheme === null) {
  const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

  const mql = window.matchMedia(COLOR_SCHEME_QUERY);

  if (mql.matches) {
    body.classList.add('dark');
  }
}
