import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.scss';
import Menu from '../../components/Menu/Menu';
import Address from '../../components/Address/Address';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t('contactPage.contactTitle')}</h1>
        <p className="hero__description">
          {t('contactPage.contactDescription')}
        </p>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">{t('contactPage.contactUsTitle')}</h2>
              <p>{t('contactPage.contactUsText')}</p>
              <a href="mailto:foundation@peercoin.net" className="btn btn--green">{t('contactPage.contactUsBtn')}</a>

              <h2 className="title title--green title--left">{t('contactPage.technicalSupportTitle')}</h2>
              <p>{t('contactPage.technicalSupportText')}</p>
              <a href="https://talk.peercoin.net/" className="btn btn--green">Peercointalk</a>
            </div>
            <div className="col col--small">
              <Address />
              <h2 className="title title--green title--left">{t('contactPage.documentationTitle')}</h2>
              <p>{t('contactPage.documentationText')}</p>
              <a href="https://docs.peercoin.net/" className="btn btn--green">{t('contactPage.documentationBtn')}</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">{t('contactPage.faqTitle')}</h2>
              <div className="faq">
                <h4>{t('contactPage.faq.howOldQuestion')}</h4>
                <p>{t('contactPage.faq.howOldAnswer')}</p>

                <h4>{t('contactPage.faq.howCanIMineQuestion')}</h4>
                <p>{t('contactPage.faq.howCanIMineAnswer')}</p>
                
                <h4>{t('contactPage.faq.whyMintingQuestion')}</h4>
                <p>{t('contactPage.faq.whyMintingAnswer')}</p>

                <h4>{t('contactPage.faq.whyFixedFeeQuestion')}</h4>
                <p>{t('contactPage.faq.whyFixedFeeAnswer')}</p>

                <h4>{t('contactPage.faq.howCanPeercoinQuestion')}</h4>
                <p>{t('contactPage.faq.howCanPeercoinAnswer')}</p>

                <h4>{t('contactPage.faq.whyNoMintingQuestion')}</h4>
                <p>{t('contactPage.faq.whyNoMintingAnswer')}</p>

                <h4>{t('contactPage.faq.howManyConfirmationsQuestion')}</h4>
                <p>{t('contactPage.faq.howManyConfirmationsAnswer')}</p>

                <h4>{t('contactPage.faq.whyNotAvailableMintinQuestion')}</h4>
                <p>{t('contactPage.faq.whyNotAvailableMintinAnswer')}</p>
              </div>
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
      <Contact />
    </Suspense>
  );
}

export default HoF;
