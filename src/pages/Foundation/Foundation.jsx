import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./Foundation.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Foundation() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <img
          src="/img/logo-foundation-white.png"
          alt="Peercoin Foundation"
          className="logo-foundation"
        />
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">
                {t("foundationPage.missionStatementTitle")}
              </h2>
              <p>{t("foundationPage.missionStatementText1")}</p>
              <p>{t("foundationPage.missionStatementText2")}</p>

              <h2 className="title title--green title--left">
                {t("foundationPage.technicalSupportTitle")}
              </h2>
              <p>{t("foundationPage.technicalSupportText")}</p>
              <p>
                {t("foundationPage.generalFundPpcAddress")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://chainz.cryptoid.info/ppc/address.dws?p92W3t7YkKfQEPDb7cG9jQ6iMh7cpKLvwK.htm"
                >
                  {" "}
                  p92W3t7YkKfQEPDb7cG9jQ6iMh7cpKLvwK
                </a>
                <br />
                {t("foundationPage.generalFundBtcAddress")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.blockchain.com/btc/address/376NhxVL1LFBFndHNx9k7hvwvUzq6RZiPT"
                >
                  {" "}
                  376NhxVL1LFBFndHNx9k7hvwvUzq6RZiPT
                </a>
                <br />
                {t("foundationPage.exchangeBtcAddress")}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.blockchain.com/btc/address/3NtJTUyXuH8KJj4BXJJxtQS7SPnLNm711C"
                >
                  {" "}
                  3NtJTUyXuH8KJj4BXJJxtQS7SPnLNm711C
                </a>
                <br />
                Fiat Donations - <b>USD/EUR</b> by <b>Credit/Debit/Wire</b>:{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opencollective.com/peercoin"
                >
                  {" "}
                  opencollective.com/peercoin
                </a>
              </p>
            </div>
            <div className="col col--small">
              <h2 className="title title--green title--left">
                {t("foundationPage.contactUsTitle")}
              </h2>
              <p>
                <b>Stichting Peercoin Foundation</b>
                <br />
                President Kennedylaan 19
                <br />
                2517JK The Hague
                <br />
                {t("foundationPage.addressCountry")}
                <br />
              </p>
              <p>
                <a href="mailto:foundation@peercoin.net">
                  foundation@peercoin.net
                </a>
                <br />
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
