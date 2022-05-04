import React, { Suspense, useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import "./Reader.scss";
import { useTranslation } from "react-i18next";

function Reader() {
  const { folder, file } = useParams();
  const { t } = useTranslation();
  const [paperAvailable, setPaperAvailable] = useState(false);

  useEffect(() => {
    fetch("/data/whitepaper.json")
      .then((res) => res.json())
      .then((jsonData) => {
        if (
          jsonData["resources"].find(
            (el) => el.url === `/${folder}/${file}`
          ) !== undefined
        ) {
          setPaperAvailable(true);
        }
      });
  }, [file, folder]);

  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">Whitepaper</h1>
      </div>
      <div className="Reader">
        <div
          className={
            paperAvailable ? "Reader__container" : "Reader__container--fault"
          }
        >
          {paperAvailable ? (
            <embed
              src={`/${folder}/${file}`}
              type="application/pdf"
              className="Reader__embed"
            />
          ) : (
            <p className="description">{t("reader.notFound")}</p>
          )}
        </div>
        {paperAvailable && <p className="description">{t("reader.hint")}</p>}
        <div className="Reader__button">
          <a href="/resources#whitepaper" className="btn btn--green">
            {t("reader.buttonGoBack")}
          </a>
          {paperAvailable && (
            <a
              href={`/${folder}/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--green"
            >
              {t("reader.buttonDownload")}
            </a>
          )}
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
