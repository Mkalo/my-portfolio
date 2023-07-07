import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/hooks/useTheme';
import MoonOutline from 'src/images/moon-outline.svg';
import SunnyOutline from 'src/images/sunny-outline.svg';

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
        {theme === 'dark' ? (
          <SunnyOutline
            className="h-6 w-6"
            onClick={() => toggleTheme()}
            aria-label="sunny"
          />
        ) : (
          <MoonOutline
            className="h-6 w-6"
            onClick={() => toggleTheme()}
            aria-label="moon"
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
