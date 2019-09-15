import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';
import renderHTML from 'react-render-html';
import './Wallet.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

function Wallet() {
  const { t } = useTranslation();
  const [ cs1, setCs1 ] = useState(true);
  const [ cs2, setCs2 ] = useState(false);
  const [ cs3, setCs3 ] = useState(false);

  async function handleOpen(num) {
    if (num === 0) {
      setCs1(true);
      setCs2(false);
      setCs3(false);
    }

    if (num === 1) {
      setCs1(false);
      setCs2(true);
      setCs3(false);
    }

    if (num === 2) {
      setCs1(false);
      setCs2(false);
      setCs3(true);
    }
  }

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t('walletPage.title')}</h1>
        <p className="hero__description">
          {t('walletPage.description')}
        </p>
        <div className="hero__actions">
          <a href="#install" className="hero__actions__action hero__actions__action--white">{t('walletPage.actions.action1')}</a>
          <a href="#paperwallet" className="hero__actions__action hero__actions__action--white">{t('walletPage.actions.action2')}</a>
          <a href="#unofficialclients" className="hero__actions__action hero__actions__action--white">{t('walletPage.actions.action3')}</a>
        </div>
      </div>

      <div className="main text-sections">
        <div className="container">
          <h2 className="title title--green">{t('walletPage.desktopWalletTitle')}</h2>
          <div className="desktop-downloads">
            <div className="desktop-downloads__items">
              <div className="desktop-downloads__items__item">
                <a href="https://github.com/peercoin/peercoin/releases/download/v0.8.2.1ppc/peercoin-0.8.2-win64-setup-unsigned.exe" target="_blank" rel="noopener noreferrer">
                  <div className="desktop-downloads__items__item__title">{t('walletPage.walletWindows')}</div>
                  <img className="desktop-downloads__items__item__img" src="/img/icons/windows.png" alt="" />
                </a> 
                <div className="desktop-downloads__items__item__checksum">
                  <span>Checksum (SHA-256):</span>
                  83148a5ab61fbf4dbffbcf807787421dee0495e6018fb928d0a26fd2af0529ae
                </div>
              </div>
              <div className="desktop-downloads__items__item">
                <a href="https://github.com/peercoin/peercoin/releases/download/v0.8.2.1ppc/peercoin-0.8.2-osx-unsigned.dmg" target="_blank" rel="noopener noreferrer">
                  <div className="desktop-downloads__items__item__title">{t('walletPage.walletMac')}</div>
                  <img className="desktop-downloads__items__item__img" src="/img/icons/apple.png" alt="" />
                </a>
                <div className="desktop-downloads__items__item__checksum">
                  <span>Checksum (SHA-256):</span>
                  b49be26ed42efe167b6d886cd02ea95e4a7ed4ad6f0fa80d98df50d807c24723
                </div>
              </div>
              <div className="desktop-downloads__items__item">
                <a href="https://github.com/peercoin/peercoin/releases/download/v0.8.2.1ppc/peercoin-0.8.2-x86_64-linux-gnu.tar.gz" target="_blank" rel="noopener noreferrer">
                  <div className="desktop-downloads__items__item__title">{t('walletPage.walletLinux')}</div>
                  <img className="desktop-downloads__items__item__img" src="/img/icons/linux.png" alt="" />
                </a>
                <div className="desktop-downloads__items__item__checksum">
                  <span>Checksum (SHA-256):</span>
                  81c416600d356f0d3fa04be0b97756c57441a33a85ce3a1dcf2e4d393d50726f
                </div>
              </div>
            </div>
            <div className="desktop-downloads__img">
              <img src="/img/wallets_splash.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="main main--dark" id="install">
        <div className="container">
          <h1 className="title title--white title--left">{t('walletPage.installationTitle')}</h1>

          <div className="timeline timeline--dark">
            <div className="timeline__body">
              <Collapsible onOpening={() => handleOpen(0)} open={cs1} trigger={<div className="timeline__body__section">{t('walletPage.walletWindows')}</div>}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t('walletPage.walletWindows')}</h2>
                    <ul>
                      <li>{renderHTML(t('walletPage.sectionWindows.text1'))}</li>
                      <li>{renderHTML(t('walletPage.sectionWindows.text2'))}</li>
                      <li>{renderHTML(t('walletPage.sectionWindows.text3'))}</li>
                    </ul>
                    <h2>{t('walletPage.sectionWindows.title2')}</h2>
                    <ul>
                      <li>{renderHTML(t('walletPage.sectionWindows.text4'))}</li>
                      <li>{renderHTML(t('walletPage.sectionWindows.text5'))}</li>
                      <li>{renderHTML(t('walletPage.sectionWindows.text6'))}</li>
                      <li>{renderHTML(t('walletPage.sectionWindows.text7'))}</li>
                    </ul>
                    <p>{renderHTML(t('walletPage.sectionWindows.text8'))}</p>
                  </div>
                </div>
              </Collapsible>
              <Collapsible onOpening={() => handleOpen(1)} trigger={<div className="timeline__body__section">{t('walletPage.sectionMac.title1')}</div>} open={cs2}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t('walletPage.sectionMac.title1')}</h2>
                    <ul>
                      <li>{renderHTML(t('walletPage.sectionMac.text1'))}</li>
                      <li>{renderHTML(t('walletPage.sectionMac.text2'))}</li>
                      <li>{renderHTML(t('walletPage.sectionMac.text3'))}</li>
                      <li>{renderHTML(t('walletPage.sectionMac.text4'))}</li>
                    </ul>
                    <h2>{t('walletPage.sectionMac.title2')}</h2>
                    <ul>
                      <li>{renderHTML(t('walletPage.sectionMac.text5'))}</li>
                      <li>{renderHTML(t('walletPage.sectionMac.text6'))}</li>
                      <li>{renderHTML(t('walletPage.sectionMac.text7'))}</li>
                    </ul>
                    <p>{renderHTML(t('walletPage.sectionMac.text8'))}</p>
                    <p>{renderHTML(t('walletPage.sectionMac.text9'))}</p>
                  </div>
                </div>
              </Collapsible>
              <Collapsible onOpening={() => handleOpen(2)} trigger={<div className="timeline__body__section">{t('walletPage.sectionLinux.title1')}</div>} open={cs3}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t('walletPage.sectionLinux.title1')}</h2>
                    <ul>
                      <li>{renderHTML(t('walletPage.sectionLinux.text1'))}</li>
                      <li>{renderHTML(t('walletPage.sectionLinux.text2'))}</li>
                    </ul>
                    <h2>{t('walletPage.sectionLinux.title2')}</h2>
                    <ul>
                      <li>{renderHTML(t('walletPage.sectionLinux.text3'))}</li>
                      <li>{renderHTML(t('walletPage.sectionLinux.text4'))}</li>
                    </ul>
                    <p>{renderHTML(t('walletPage.sectionLinux.text5'))}</p>
                    <p>{renderHTML(t('walletPage.sectionLinux.text6'))}</p>
                    <p>{renderHTML(t('walletPage.sectionLinux.text7'))}</p>
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
      <div className="main" id="paperwallet">
        <div className="container">
          <h2 className="title title--green">{t('walletPage.paperWalletTitle')}</h2>
          <div className="blocks-list">
            <a href="https://paperwallet.peercoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('walletPage.paperWalletSubtitle1')}</h4>
              <img className="blocks-list__block__img" src="/img/explorers/peercoin_green.png" alt="" />
            </a>
          </div>
          <h2 className="title title--green" id="unofficialclients">{t('walletPage.paperWalletSubtitle2')}</h2>
          <div className="blocks-list">
            <a href="https://www.ledger.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Ledger</h4>
              <img className="blocks-list__block__img" src="/img/wallets/ledger.png" alt="" />
              <div className="blocks-list__block__type">{t('walletPage.type1')}</div>
            </a>
            <a href="https://www.cryptonator.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Cryptonator</h4>
              <img className="blocks-list__block__img" src="/img/wallets/cryptonator.png" alt="" />
              <div className="blocks-list__block__type">{t('walletPage.type2')}</div>
            </a>
            <a href="http://uberpay.io/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">UberPay</h4>
              <img className="blocks-list__block__img" src="/img/wallets/uberpay.png" alt="" />
              <div className="blocks-list__block__type">{t('walletPage.type2')}</div>
            </a>
            <a href="https://www.coinspot.com.au/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Coinspot</h4>
              <img className="blocks-list__block__img" src="/img/wallets/coinspot.png" alt="" />
              <div className="blocks-list__block__type">{t('walletPage.type3')}</div>
            </a>
            <a href="https://www.coinvault.io/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">CoinVault</h4>
              <img className="blocks-list__block__img" src="/img/wallets/coinvault.png" alt="" />
              <div className="blocks-list__block__type">{t('walletPage.type3')}</div>
            </a>
            <a href="https://holytransaction.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">HolyTransaction</h4>
              <img className="blocks-list__block__img" src="/img/wallets/holytransaction.png" alt="" />
              <div className="blocks-list__block__type">{t('walletPage.type3')}</div>
            </a>
            <a href="https://magnumwallet.co/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Magnum</h4>
              <img className="blocks-list__block__img" src="/img/wallets/magnum.png" alt="" />
              <div className="blocks-list__block__type">{t('walletPage.type2')}</div>
            </a>
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
      <Wallet />
    </Suspense>
  );
}

export default HoF;
