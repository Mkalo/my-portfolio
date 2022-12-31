import { useTranslation } from 'react-i18next';

import logo from './logo.png';

const Header = () => {
  const { t } = useTranslation();

  return (
    <nav className="border-b border-gray-400 px-2 py-2.5">
      <div className="container flex items-center">
        <img src={logo} alt="logo" className="mr-3 h-8 w-8" />
        <h1 className="self-center whitespace-nowrap text-xl font-semibold">
          {t('app_title')}
        </h1>
      </div>
    </nav>
  );
};

export default Header;
