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
        <h1 className="hero__title">{t("contributePage.contributeTitle")}</h1>
        <p className="hero__description">
          {t("contributePage.contributeDescription")}
        </p>
      </div>

      <div className="main text-sections">
        <div className="container contribute">
          <p>{t("contributePage.contributeIntro")}</p>
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">
                {t("contributePage.header.reportBugs")}
              </h2>
              <p>{t("contributePage.content.reportBugs")}</p>
              <a
                href="https://github.com/peercoin/"
                className="btn btn--green"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {t("resourcesPage.contributeBtn")}
              </a>
            </div>
            <div className="col">
              <h2 className="title title--green title--left">
                {t("contributePage.header.helpOthers")}
              </h2>
              <p>{t("contributePage.content.helpOthers")}</p>
              <a
                href="https://talk.peercoin.net/"
                className="btn btn--green"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("contributePage.buttons.help")}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">
                {t("contributePage.header.translate")}
              </h2>
              <p>{t("contributePage.content.translate")}</p>
              <a
                href="https://www.transifex.com/peercoin-foundation/public/"
                className="btn btn--green"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {t("contributePage.buttons.translate")}
              </a>
            </div>
            <div className="col">
              <h2 className="title title--green title--left">
                {t("contributePage.header.write")}
              </h2>
              <p>{t("contributePage.content.write")}</p>
              <a
                href="https://github.com/peercoin/"
                className="btn btn--green"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {t("resourcesPage.contributeBtn")}
              </a>
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
      <Contribute />
    </Suspense>
  );
}

export default HoF;
