import React, { Suspense, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";
import renderHTML from "react-render-html";
import "./Wallet.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Wallet() {
  const { t } = useTranslation();
  const [cs1, setCs1] = useState(true);
  const [cs2, setCs2] = useState(false);
  const [cs3, setCs3] = useState(false);
  const [officialWallets, setOfficialWallets] = useState([]);
  const [wallets, setOtherWallets] = useState([]);
  const [installations, setInstallations] = useState([]);
  const [filenames, setFilenames] = useState([]);
  
  useEffect(() => {
    fetch("/data/wallets.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setOfficialWallets(jsonData["official"]);
        setOtherWallets(jsonData["other"]);

        const _filenames = {};
        jsonData["official"].forEach(wallet => _filenames[wallet.os] = wallet.link.split("/")[wallet.link.split("/").length - 1]);
        setFilenames(_filenames);
      });
  }, []);

  useEffect(() => {
    fetch("/data/installations.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setInstallations(jsonData);
      });
  }, []);

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

  function getCollapseVar(index) {
    switch (index) {
      case 0:
        return cs1;
      case 1:
        return cs2;
      case 2:
        return cs3;
      default:
        throw new Error("Could not resolve collapse var for value " + index)
    }
  }

  function translate(str, os) {
    return renderHTML(t(str, {
      file: filenames[os]
    }));
  }

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t("walletPage.title")}</h1>
        <p className="hero__description">{t("walletPage.description")}</p>
        <div className="hero__actions">
          <a
            href="#install"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("walletPage.actions.action1")}
          </a>
          <a
            href="#paperwallet"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("walletPage.actions.action2")}
          </a>
          <a
            href="#unofficialclients"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("walletPage.actions.action3")}
          </a>
        </div>
      </div>

      <div className="main text-sections">
        <div className="container">
          <h2 className="title title--green">{t("walletPage.title")}</h2>
          <div className="desktop-downloads">
            <div className="desktop-downloads__items">
              {officialWallets.length > 0 &&
                officialWallets.map((item) => (
                  <div className="desktop-downloads__items__item">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="desktop-downloads__items__item__title">
                        {item.os}
                      </div>
                      <img
                        className="desktop-downloads__items__item__img"
                        src={item.img}
                        alt=""
                      />
                    </a>
                    <div className="desktop-downloads__items__item__checksum">
                      <span>Checksum (SHA-256):</span>
                      {item.checksum}
                    </div>
                  </div>
                ))}
            </div>
            <div className="desktop-downloads__img">
              <img src="/img/wallets_splash.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="main main--dark main--no_bottom">
        <div className="anchor" data-id="install"></div>
        <div className="container">
          <h1 className="title title--white title--left">
            {t("walletPage.installationTitle")}
          </h1>

          <div className="timeline timeline--dark">
            <div className="timeline__body">

                {
                  installations.map((installation, index) => (
                    <Collapsible onOpening={() => handleOpen(index)} open={getCollapseVar(index)} trigger={
                        <div className="timeline__body__section">
                          {t(installation.title)}
                        </div>
                      }
                    >
                      <div className="timeline__body__content">
                        <div className="timeline__body__content__text">

                          {
                            installation.options.map(option => (
                              <div>
                                <h2>{t(option.title)}</h2>
                                {
                                  option.steps.map(step => {
                                    if (step.type === "list") {
                                      return <ul>
                                        {step.items.map(item => (
                                          <li>
                                            {translate(item, installation.title)}
                                          </li>
                                        ))}
                                      </ul>
                                    } else if (step.type === "text") {
                                      return <p>{renderHTML(t(step.text))}</p>
                                    }
                                    
                                    throw new Error("Could not resolve option step for type " + step.type)
                                  })
                                }
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </Collapsible>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          {
            wallets.length > 0 && wallets.map(type => (
              <div className="blocks-list-container">
                <h2 className="title title--green" data-id={type.key}>
                  {t(type.title)}
                </h2>
                <div className="blocks-list">
                  {type.wallets.map(wallet => (
                    <a href={wallet.url} className="blocks-list__block">
                      <h4 className="blocks-list__block__title">
                        {wallet.title.translated ? t(wallet.title.text) : wallet.title.text}
                      </h4>
                      <img className="blocks-list__block__img" src={wallet.image} alt="" />
                      {wallet.subtitle ? (
                        <div className="blocks-list__block__type mt-1">
                          {wallet.subtitle && wallet.subtitle.translated ? t(wallet.subtitle.text) : wallet.subtitle.text}
                        </div>
                      ) : null}
                    </a>
                ))}
              </div>
            </div>
          ))}
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
