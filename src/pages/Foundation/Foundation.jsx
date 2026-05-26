import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
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
          </div>
          <div className="col col--small">
            <Address />
            <p style={{ marginTop: "1rem" }}>
              <a href="mailto:foundation@peercoin.net">
                foundation@peercoin.net
              </a>
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
