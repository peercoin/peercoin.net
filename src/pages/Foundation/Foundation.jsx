import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./Foundation.scss";
import Menu from "../../components/Menu/Menu";
import Address from "../../components/Address/Address";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Foundation() {
  const { t } = useTranslation();
  const fileNames = [
    "Stichting_Peercoin_Foundation_-_Jaarrekening_2018.pdf",
    "Stichting_Peercoin_Foundation_-_Jaarrekening_2019.pdf",
    "Stichting_Peercoin_Foundation_-_Jaarrekening_2020.pdf",
    "Stichting_Peercoin_Foundation_-_Jaarrekening_2021.pdf",
    "Stichting_Peercoin_Foundation_-_Jaarstukken_2022.pdf",
    "Stichting_Peercoin_Foundation_-_Jaarstukken_2023.pdf",
    "Stichting_Peercoin_Foundation_-_Jaarstukken_2024.pdf",
  ];

  const renderLinks = (fileNames) => {
    return fileNames.map((fileName, index) => {
      const year = fileName.split("_")[5].split(".")[0];
      console.log(year);
      return (
        <p key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={`/assets/reports/${fileName}`}
          >
            {`Financial Report ${year}`}
          </a>
        </p>
      );
    });
  };

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
            <div>
              <h2 className="title title--green title--left">
                {t("foundationPage.reportsTitle")}
              </h2>
              <p>{t("foundationPage.reportsSupportText")}</p>
              {renderLinks(fileNames)}
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
