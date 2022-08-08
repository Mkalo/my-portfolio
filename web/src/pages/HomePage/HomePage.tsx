import { useTranslation } from 'react-i18next';

import { MetaTags } from '@redwoodjs/web';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1>{t('hello_world')}</h1>
    </>
  );
};

export default HomePage;
