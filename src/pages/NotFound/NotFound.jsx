import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
    <Menu />
    <div className="Index hero">
      <img src="/img/logo-white.svg" alt="Peercoin Logo" width="220" />
      <h1 className="hero__title">{t('notFoundPage.title')}</h1>
    </div>
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <NotFound />
    </Suspense>
  );
}

export default HoF;
