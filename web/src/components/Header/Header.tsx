import { useEffect } from 'react';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/hooks/useTheme';
import BrazilFlag from 'src/images/br.svg';
import MoonOutline from 'src/images/moon-outline.svg';
import SunnyOutline from 'src/images/sunny-outline.svg';
import UsaFlag from 'src/images/us.svg';

import logo from './logo.webp';

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
    <nav className="flex justify-between border-b border-gray-400 px-5 py-2.5">
      <div className="container flex items-center">
        <img src={logo} alt="logo" className="mr-3 h-8 w-8" />
        <h1 className="self-center whitespace-nowrap text-xl font-semibold">
          {t('app_title')}
        </h1>
      </div>
      <div className="flex select-none items-center gap-4">
        <button
          lang="pt"
          aria-label="portugues"
          onClick={() => i18next.changeLanguage('pt')}
        >
          <BrazilFlag className="h-6 w-6" />
        </button>
        <button
          lang="en"
          aria-label="english"
          onClick={() => i18next.changeLanguage('en')}
        >
          <UsaFlag className="h-6 w-6" />
        </button>
        <button aria-label="theme">
          {theme === 'dark' ? (
            <MoonOutline
              className="h-6 w-6"
              onClick={() => toggleTheme()}
              aria-label="moon"
            />
          ) : (
            <SunnyOutline
              className="h-6 w-6"
              onClick={() => toggleTheme()}
              aria-label="sunny"
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
