import { useTranslation } from 'react-i18next';

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './index.scss';
import './i18n/config';
import { ThemeProvider } from './hooks/useTheme';

const App = () => {
  const { t } = useTranslation();

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate={`%PageTitle | ${t('app_title')}`}>
        <RedwoodApolloProvider>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  );
};

export default App;
