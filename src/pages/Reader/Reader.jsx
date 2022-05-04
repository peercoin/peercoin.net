import React, { Suspense } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import "./Reader.scss";
import { useTranslation } from "react-i18next";

function Reader() {
  const { folder, file } = useParams();
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">Whitepaper</h1>
      </div>
      <div>
        <div className="Reader__container">
          <embed
            src={`/${folder}/${file}`}
            type="application/pdf"
            className="Reader__embed"
          />
        </div>
        <div className="Reader__button">
          <a href="/resources#whitepaper" className="btn btn--green">
            {t("reader.buttonGoBack")}
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Reader />
    </Suspense>
  );
}

export default HoF;
