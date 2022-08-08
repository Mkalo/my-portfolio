import { useLayoutEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './index.scss';
import './i18n/config';

const App = () => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    // add dark mode class to html if set in localStorage or match OS preference
    const theme = localStorage.getItem('theme');
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('tw-dark');
    } else {
      document.documentElement.classList.remove('tw-dark');
    }
  }, []);

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate={`%PageTitle | ${t('app_title')}`}>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  );
};

export default App;
