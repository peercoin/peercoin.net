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
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/wallets.json")
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
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

  function getFilename(os) {
    if (data.length === 0) {
      return "";
    }

    const osData = data.filter((item) => item.os === os)[0];
    return osData.link.split("/")[osData.link.split("/").length - 1];
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
              {data.length > 0 &&
                data.map((item) => (
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
      <div className="main main--dark">
        <div className="anchor" data-id="install"></div>
        <div className="container">
          <h1 className="title title--white title--left">
            {t("walletPage.installationTitle")}
          </h1>

          <div className="timeline timeline--dark">
            <div className="timeline__body">
              <Collapsible
                onOpening={() => handleOpen(0)}
                open={cs1}
                trigger={
                  <div className="timeline__body__section">
                    {t("walletPage.walletWindows")}
                  </div>
                }
              >
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t("walletPage.walletWindows")}</h2>
                    <ul>
                      <li>
                        {renderHTML(
                          t("walletPage.sectionWindows.text1", {
                            file: getFilename("Windows"),
                          })
                        )}
                      </li>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text2"))}
                      </li>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text3"))}
                      </li>
                    </ul>
                    <h2>{t("walletPage.sectionWindows.title2")}</h2>
                    <ul>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text4"))}
                      </li>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text5"))}
                      </li>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text6"))}
                      </li>
                      <li>
                        {renderHTML(t("walletPage.sectionWindows.text7"))}
                      </li>
                    </ul>
                    <p>{renderHTML(t("walletPage.sectionWindows.text8"))}</p>
                  </div>
                </div>
              </Collapsible>
              <Collapsible
                onOpening={() => handleOpen(1)}
                trigger={
                  <div className="timeline__body__section">
                    {t("walletPage.sectionMac.title1")}
                  </div>
                }
                open={cs2}
              >
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t("walletPage.sectionMac.title1")}</h2>
                    <ul>
                      <li>
                        {renderHTML(
                          t("walletPage.sectionMac.text1", {
                            file: getFilename("macOS"),
                          })
                        )}
                      </li>
                      <li>{renderHTML(t("walletPage.sectionMac.text2"))}</li>
                      <li>{renderHTML(t("walletPage.sectionMac.text3"))}</li>
                      <li>{renderHTML(t("walletPage.sectionMac.text4"))}</li>
                    </ul>
                    <h2>{t("walletPage.sectionMac.title2")}</h2>
                    <ul>
                      <li>{renderHTML(t("walletPage.sectionMac.text5"))}</li>
                      <li>{renderHTML(t("walletPage.sectionMac.text6"))}</li>
                      <li>{renderHTML(t("walletPage.sectionMac.text7"))}</li>
                    </ul>
                    <p>{renderHTML(t("walletPage.sectionMac.text8"))}</p>
                    <p>{renderHTML(t("walletPage.sectionMac.text9"))}</p>
                  </div>
                </div>
              </Collapsible>
              <Collapsible
                onOpening={() => handleOpen(2)}
                trigger={
                  <div className="timeline__body__section">
                    {t("walletPage.sectionLinux.title1")}
                  </div>
                }
                open={cs3}
              >
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>{t("walletPage.sectionLinux.title1")}</h2>
                    <ul>
                      <li>
                        {renderHTML(
                          t("walletPage.sectionLinux.text1", {
                            file: getFilename("Linux"),
                          })
                        )}
                      </li>
                      <li>{renderHTML(t("walletPage.sectionLinux.text2"))}</li>
                    </ul>
                    <h2>{t("walletPage.sectionLinux.title2")}</h2>
                    <ul>
                      <li>{renderHTML(t("walletPage.sectionLinux.text3"))}</li>
                      <li>{renderHTML(t("walletPage.sectionLinux.text4"))}</li>
                    </ul>
                    <p>{renderHTML(t("walletPage.sectionLinux.text5"))}</p>
                    <p>{renderHTML(t("walletPage.sectionLinux.text6"))}</p>
                    <p>{renderHTML(t("walletPage.sectionLinux.text7"))}</p>
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="anchor" data-id="paperwallet"></div>
        <div className="container">
          <h2 className="title title--green">
            {t("walletPage.paperWalletTitle")}
          </h2>
          <div className="blocks-list">
            <a
              href="https://paperwallet.peercoin.net/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">
                {t("walletPage.paperWalletSubtitle1")}
              </h4>
              <img
                className="blocks-list__block__img"
                src="/img/explorers/peercoin_green.png"
                alt=""
              />
            </a>
          </div>
          <h2 className="title title--green">
            <div className="anchor" data-id="unofficialclients"></div>
            {t("walletPage.paperWalletSubtitle2")}
          </h2>
          <div className="blocks-list">
            <a href="https://www.ledger.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Ledger</h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/ledger.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                {t("walletPage.type1")}
              </div>
            </a>
            <a href="https://uberpay.io/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">UberPay</h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/uberpay.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                {t("walletPage.type2")}
              </div>
            </a>
            <a
              href="https://www.coinspot.com.au/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">Coinspot</h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/coinspot.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                {t("walletPage.type3")}
              </div>
            </a>
            <a href="https://www.coinvault.io/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">CoinVault</h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/coinvault.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                {t("walletPage.type3")}
              </div>
            </a>
            <a
              href="https://holytransaction.com/"
              className="blocks-list__block"
            >
              <h4 className="blocks-list__block__title">HolyTransaction</h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/holytransaction.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                {t("walletPage.type3")}
              </div>
            </a>
            <a href="https://www.abra.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Abra</h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/abra.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                {t("walletPage.type2")}
              </div>
            </a>
            <a href="https://www.coinomi.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Coinomi</h4>
              <img
                className="blocks-list__block__img"
                src="/img/wallets/coinomi.png"
                alt=""
              />
              <div className="blocks-list__block__type">
                {t("walletPage.type2")}
              </div>
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
