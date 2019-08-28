import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t('projectsPage.title')}</h1>
        <p className="hero__description">
        {t('projectsPage.description')}
        </p>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">{t('projectsPage.peerAssetsTitle')}</h2>
              <p>{t('projectsPage.peerAssetsP1')}</p>
              <p>{t('projectsPage.peerAssetsP2')}</p>
              <p>{t('projectsPage.peerAssetsP3')}</p>
              <p>{t('projectsPage.peerAssetsP4')}</p>
              <a href="https://github.com/PeerAssets" className="btn btn--green">{t('projectsPage.peerAssetsBtnGithub')}</a>
              <a href="https://peerassets.github.io/WhitePaper/" className="btn btn--green">{t('projectsPage.peerAssetsBtnWhitepaper')}</a>
            </div>
            <div className="col">
              <h2 className="title title--green title--left">{t('projectsPage.perperaTitle')}</h2>
              <p>{t('projectsPage.perperaP1')}</p>
              <p>{t('projectsPage.perperaP2')}</p>
              <p>{t('projectsPage.perperaP3')}</p>
              <p>{t('projectsPage.perperaP4')}</p>
              <a href="https://github.com/PeerAssets/perpera" className="btn btn--green">{t('projectsPage.perperaBtnGithub')}</a>
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
      <Projects />
    </Suspense>
  );
}

export default HoF;
