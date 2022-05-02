import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import Collapsible from "react-collapsible";
import renderHTML from "react-render-html";
import YouTube from "react-youtube";
import "./Index.scss";
import Menu from "../../components/Menu/Menu";
import LatestNews from "../../components/LatestNews/LatestNews";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Index() {
  const youtubeVideos = [
    "x8KAsime9EI",
    "L5RW1-6w7i4",
    "V2469sPrz1w",
    "uhVJKAvl1qA",
    "HbnSlQbUf0U",
  ];

  const { t } = useTranslation();
  const [cs1, setCs1] = useState(true);
  const [cs2, setCs2] = useState(false);
  const [cs3, setCs3] = useState(false);
  const [cs4, setCs4] = useState(false);
  const [cs5, setCs5] = useState(false);
  const [cs6, setCs6] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoPristine, setIsVideoPristine] = useState(true);

  const sets = [setCs1, setCs2, setCs3, setCs4, setCs5, setCs6];

  async function handleOpen(num) {
    sets.forEach((set, i) => {
      if (i === num) {
        set(true);
      } else {
        set(false);
      }
    });
  }

  async function onYoutubeEnd() {
    if (currentVideo === youtubeVideos.length - 1) {
      return;
    }

    await setIsVideoPristine(false);
    await setCurrentVideo(currentVideo + 1);
  }

  async function setVideo(index) {
    await setIsVideoPristine(false);
    await setCurrentVideo(index);
  }

  return (
    <>
      <Menu />
      <div className="Index hero">
        <img
          className="hero__logo"
          src="/img/logos/peercoin-vertical-whiteleaf-whitetext-transparent_slogan.svg"
          alt="Peercoin Logo"
        />
        <div className="hero__actions">
          <a href="/#getstarted" className="hero__actions__action">
            {t("indexPage.actions.action1")}
          </a>
          <a
            href="https://peercoin.net/university/#/9-peercoin-proof-of-stake-consensus"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("indexPage.actions.action2")}
          </a>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <section className="home-youtube">
            <h1 className="title title--green">Peercoin Primer</h1>
            <p className="home-youtube__subtext">
              {t("indexPage.youtubeSection.subText")}
            </p>
            <YouTube
              opts={{
                playerVars: {
                  modestbranding: 1,
                  autoplay: isVideoPristine ? 0 : 1,
                },
              }}
              videoId={youtubeVideos[currentVideo]}
              className="home-youtube__video__player"
              containerClassName="home-youtube__video"
              onEnd={onYoutubeEnd}
            />
            <div className="video-buttons">
              <button
                className={currentVideo === 0 ? "btn btn--selected" : "btn"}
                onClick={() => setVideo(0)}
              >
                {t("indexPage.youtubeSection.btnVideo1")}
              </button>
              <button
                className={currentVideo === 1 ? "btn btn--selected" : "btn"}
                onClick={() => setVideo(1)}
              >
                {t("indexPage.youtubeSection.btnVideo2")}
              </button>
              <button
                className={currentVideo === 2 ? "btn btn--selected" : "btn"}
                onClick={() => setVideo(2)}
              >
                {t("indexPage.youtubeSection.btnVideo3")}
              </button>
              <button
                className={currentVideo === 3 ? "btn btn--selected" : "btn"}
                onClick={() => setVideo(3)}
              >
                {t("indexPage.youtubeSection.btnVideo4")}
              </button>
              <button
                className={currentVideo === 4 ? "btn btn--selected" : "btn"}
                onClick={() => setVideo(4)}
              >
                {t("indexPage.youtubeSection.btnVideo5")}
              </button>
            </div>
          </section>

          <section className="home-description">
            <div className="home-description__text">
              <h2 className="home-description__text__title">
                {t("indexPage.efficientEnergyTitle")}
              </h2>
              <p>{renderHTML(t("indexPage.efficientEnergyText1"))}</p>
              <p>{renderHTML(t("indexPage.efficientEnergyText2"))}</p>
              <p>{renderHTML(t("indexPage.efficientEnergyText3"))}</p>
            </div>
            <img
              className="home-description__img"
              src="/img/animations/efficient-and-sustainable.svg"
              alt=""
            />
          </section>
          <section className="home-description">
            <img
              className="home-description__img"
              src="/img/animations/user-driven-governance.svg"
              alt=""
            />
            <div className="home-description__text home-description__text--left">
              <h2 className="home-description__text__title">
                {t("indexPage.userGovernanceTitle")}
              </h2>
              <p>{renderHTML(t("indexPage.userGovernanceText1"))}</p>
              <p>{renderHTML(t("indexPage.userGovernanceText2"))}</p>
              <p>{renderHTML(t("indexPage.userGovernanceText3"))}</p>
            </div>
          </section>
          <section className="home-description">
            <div className="home-description__text">
              <h2 className="home-description__text__title">
                {t("indexPage.trustlessTitle")}
              </h2>
              <p>{renderHTML(t("indexPage.trustlessText1"))}</p>
              <p>{renderHTML(t("indexPage.trustlessText2"))}</p>
              <p>{renderHTML(t("indexPage.trustlessText3"))}</p>
            </div>
            <img
              className="home-description__img"
              src="/img/animations/trustless-base-layer.svg"
              alt=""
            />
          </section>
          <section className="home-description">
            <img
              className="home-description__img"
              src="/img/animations/pos-security-and-distribution.svg"
              alt=""
            />
            <div className="home-description__text home-description__text--left">
              <h2 className="home-description__text__title">
                {t("indexPage.fairDistributionTitle")}
              </h2>
              <p>{renderHTML(t("indexPage.fairDistributionText1"))}</p>
              <p>{renderHTML(t("indexPage.fairDistributionText2"))}</p>
              <p>{renderHTML(t("indexPage.fairDistributionText3"))}</p>
              <p>{renderHTML(t("indexPage.fairDistributionText4"))}</p>
            </div>
          </section>
          <section className="home-description">
            <div className="home-description__text">
              <h2 className="home-description__text__title">
                {t("indexPage.valueStoreTitle")}
              </h2>
              <p>{renderHTML(t("indexPage.valueStoreText1"))}</p>
              <p>{renderHTML(t("indexPage.valueStoreText2"))}</p>
              <p>{renderHTML(t("indexPage.valueStoreText3"))}</p>
            </div>
            <img
              className="home-description__img"
              src="/img/animations/reliable-store-of-value.svg"
              alt=""
            />
          </section>
        </div>
        <div className="main main--green">
          <div className="anchor" data-id="getstarted"></div>
          <div className="container">
            <div className="timeline">
              <h2 className="timeline__title">
                {t("indexPage.getStartedTitle")}
              </h2>
              <div className="timeline__body">
                <Collapsible
                  onOpening={() => handleOpen(0)}
                  open={cs1}
                  trigger={
                    <div className="timeline__body__section">
                      <img src="/img/icons/graduationcap_white.png" alt="" />{" "}
                      {t("indexPage.collapsables.learnTitle")}
                    </div>
                  }
                >
                  <div className="timeline__body__content">
                    <div className="timeline__body__content__text">
                      <p>
                        {renderHTML(t("indexPage.collapsables.learnText1"))}
                      </p>
                      <p>
                        {renderHTML(t("indexPage.collapsables.learnText2"))}
                      </p>
                      <p>
                        {renderHTML(t("indexPage.collapsables.learnText3"))}
                      </p>
                    </div>
                    <div className="timeline__body__content__img">
                      <img src="/img/icons/sidecard-learn.png" alt="" />
                    </div>
                  </div>
                </Collapsible>
                <Collapsible
                  onOpening={() => handleOpen(1)}
                  open={cs2}
                  trigger={
                    <div className="timeline__body__section">
                      <img src="/img/icons/purchasing_white.png" alt="" />{" "}
                      {t("indexPage.collapsables.purchaseTitle")}
                    </div>
                  }
                >
                  <div className="timeline__body__content">
                    <div className="timeline__body__content__text">
                      <p>
                        {renderHTML(t("indexPage.collapsables.purchaseText1"))}
                      </p>
                      <p>
                        {renderHTML(t("indexPage.collapsables.purchaseText2"))}
                      </p>
                      <p>
                        {renderHTML(t("indexPage.collapsables.purchaseText3"))}
                      </p>
                    </div>
                    <div className="timeline__body__content__img">
                      <img src="/img/icons/sidecard-purchasing.png" alt="" />
                    </div>
                  </div>
                </Collapsible>
                <Collapsible
                  onOpening={() => handleOpen(2)}
                  open={cs3}
                  trigger={
                    <div className="timeline__body__section">
                      <img src="/img/icons/wallets.png" alt="" />{" "}
                      {t("indexPage.collapsables.walletTitle")}
                    </div>
                  }
                >
                  <div className="timeline__body__content">
                    <div className="timeline__body__content__text">
                      <p>
                        {renderHTML(t("indexPage.collapsables.walletText1"))}
                      </p>
                      <p>
                        {renderHTML(t("indexPage.collapsables.walletText2"))}
                      </p>
                      <p>
                        {renderHTML(t("indexPage.collapsables.walletText3"))}
                      </p>
                    </div>
                    <div className="timeline__body__content__img">
                      <img src="/img/icons/sidecard-wallet.png" alt="" />
                    </div>
                  </div>
                </Collapsible>
                <Collapsible
                  onOpening={() => handleOpen(3)}
                  open={cs4}
                  trigger={
                    <div className="timeline__body__section">
                      <img src="/img/icons/anvil.png" alt="" />{" "}
                      {t("indexPage.collapsables.mintTitle")}
                    </div>
                  }
                >
                  <div className="timeline__body__content">
                    <div className="timeline__body__content__text">
                      <p>{renderHTML(t("indexPage.collapsables.mintText1"))}</p>
                      <p>{renderHTML(t("indexPage.collapsables.mintText2"))}</p>
                      <p>{renderHTML(t("indexPage.collapsables.mintText3"))}</p>
                    </div>
                    <div className="timeline__body__content__img">
                      <img src="/img/icons/sidecard-anvil.png" alt="" />
                    </div>
                  </div>
                </Collapsible>
                <Collapsible
                  onOpening={() => handleOpen(4)}
                  open={cs5}
                  trigger={
                    <div className="timeline__body__section">
                      <img src="/img/icons/pickaxe.png" alt="" />{" "}
                      {t("indexPage.collapsables.mineTitle")}
                    </div>
                  }
                >
                  <div className="timeline__body__content">
                    <div className="timeline__body__content__text">
                      <p>{renderHTML(t("indexPage.collapsables.mineText1"))}</p>
                      <p>{renderHTML(t("indexPage.collapsables.mineText2"))}</p>
                    </div>
                    <div className="timeline__body__content__img">
                      <img src="/img/icons/sidecard-mining.png" alt="" />
                    </div>
                  </div>
                </Collapsible>
                <Collapsible
                  onOpening={() => handleOpen(5)}
                  open={cs6}
                  trigger={
                    <div className="timeline__body__section">
                      <img src="/img/icons/community_white.png" alt="" />{" "}
                      {t("indexPage.collapsables.communityTitle")}
                    </div>
                  }
                >
                  <div className="timeline__body__content">
                    <div className="timeline__body__content__text">
                      <p>
                        {renderHTML(t("indexPage.collapsables.communityText1"))}
                      </p>
                      <p>
                        {renderHTML(t("indexPage.collapsables.communityText2"))}
                      </p>
                    </div>
                    <div className="timeline__body__content__img">
                      <img src="/img/icons/sidecard-community.png" alt="" />
                    </div>
                  </div>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <h2 className="title title--green">
              {t("indexPage.latestNewsTitle")}
            </h2>
            <LatestNews />
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
      <Index />
    </Suspense>
  );
}

export default HoF;
