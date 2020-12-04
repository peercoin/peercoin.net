import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./Contribute.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Contribute() {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t("contactPage.contactTitle")}</h1>
        <p className="hero__description">
          {t("contactPage.contactDescription")}
        </p>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">Contribute</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Contribute />
    </Suspense>
  );
}

export default HoF;
