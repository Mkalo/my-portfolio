import { useEffect } from 'react';

import { IonIcon } from '@ionic/react';
import { moonOutline, sunnyOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/hooks/useTheme';

import logo from './logo.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <nav className="flex justify-between border-b border-gray-400 px-2 py-2.5">
      <div className="container flex items-center">
        <img src={logo} alt="logo" className="mr-3 h-8 w-8" />
        <h1 className="self-center whitespace-nowrap text-xl font-semibold">
          {t('app_title')}
        </h1>
      </div>
      <div className="flex cursor-pointer select-none items-center">
        <IonIcon
          icon={theme === 'dark' ? sunnyOutline : moonOutline}
          className="text-2xl"
          onClick={() => toggleTheme()}
        />
      </div>
    </nav>
  );
};

export default Header;
