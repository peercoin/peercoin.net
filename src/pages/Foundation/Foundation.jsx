import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './Foundation.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

function Foundation() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <img src="/img/logo-foundation-white.png" alt="Peercoin Foundation" className="logo-foundation"/>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">{t('foundationPage.missionStatementTitle')}</h2>
              <p>{t('foundationPage.missionStatementText')}</p>
              
              <h2 className="title title--green title--left">{t('foundationPage.technicalSupportTitle')}</h2>
              <p>{t('foundationPage.technicalSupportText')}</p>
              <p>
              {t('foundationPage.generalFundPpcAddress')} <b>p92W3t7YkKfQEPDb7cG9jQ6iMh7cpKLvwK</b><br />
              {t('foundationPage.generalFundBtcAddress')} <b>376NhxVL1LFBFndHNx9k7hvwvUzq6RZiPT</b><br />
              {t('foundationPage.exchangeBtcAddress')} <b>3NtJTUyXuH8KJj4BXJJxtQS7SPnLNm711CM</b>
              </p>
            </div>
            <div className="col col--small">
              <h2 className="title title--green title--left">{t('foundationPage.contactUsTitle')}</h2>
              <p>
                <b>Stichting Peercoin Foundation</b><br />
                Postbus 7875<br />
                1008AB AMSTERDAM<br />
                {t('foundationPage.addressCountry')}<br />
              </p>
              <p>
                <a href="mailto:foundation@peercoin.net">foundation@peercoin.net</a><br />
                RSIN: 858715958 
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Foundation />
    </Suspense>
  );
}

export default HoF;
