import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./Foundation.scss";
import Menu from "../../components/Menu/Menu";
import Address from "../../components/Address/Address";
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
          <div className="col">
            <h2 className="title title--green title--left">
              {t("foundationPage.missionStatementTitle")}
            </h2>
            <p>{t("foundationPage.missionStatementText1")}</p>
            <p>{t("foundationPage.missionStatementText2")}</p>

            <div className="anchor" data-id="donate"></div>
            <h2 className="title title--green title--left">
              {t("foundationPage.technicalSupportTitle")}
            </h2>
            <p>{t("foundationPage.technicalSupportText")}</p>
            <p>
              <Trans i18nKey="foundationPage.generalFundPpcAddress">
                General Fund - <strong>PPC</strong> Donation Address:
              </Trans>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://chainz.cryptoid.info/ppc/address.dws?p77CZFn9jvg9waCzKBzkQfSvBBzPH1nRre.htm"
              >
                {" "}
                p77CZFn9jvg9waCzKBzkQfSvBBzPH1nRre
              </a>
              <br />
              <Trans i18nKey="foundationPage.generalFundBtcAddress">
                General Fund - <strong>BTC</strong> Donation Address
              </Trans>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://mempool.space/address/3DrygZif7mB359Md5BbN1XFRxX6wBWqmcc"
              >
                {" "}
                3DrygZif7mB359Md5BbN1XFRxX6wBWqmcc
              </a>
              <br />
              <Trans i18nKey="foundationPage.generalFundEthAddress">
                General Fund - <strong>ETH/USDC/WBTC</strong> Donation Address
              </Trans>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://etherscan.io/address/0xC631f54Aa17F9539c63bcdcdB648cb02a691D7e2"
              >
                {" "}
                0xC631f54Aa17F9539c63bcdcdB648cb02a691D7e2
              </a>
              <br />
              <Trans i18nKey="foundationPage.openCollectiveNote">
                Fiat Donations - <strong>USD/EUR</strong> by Credit/Debit/Wire:
              </Trans>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://opencollective.com/peercoin"
              >
                {" "}
                opencollective.com/peercoin
              </a>
            </p>
            <div>
              <h2 className="title title--green title--left">
                {t("foundationPage.reportsTitle")}
              </h2>
              <p>{t("foundationPage.reportsSupportText")}</p>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarrekening_2018.pdf"
              >
                Financial Report 2018
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarrekening_2019.pdf"
              >
                Financial Report 2019
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarrekening_2020.pdf"
              >
                Financial Report 2020
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarrekening_2021.pdf"
              >
                Financial Report 2021
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarstukken_2022.pdf"
              >
                Financial Report 2022
              </a>
            </div>
          </div>
          <div className="col col--small">
            <Address />
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
