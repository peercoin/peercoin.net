import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import Loader from "../Loader/Loader";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="main main--grey main--no_bottom">
      <div className="footer-wrapper">
        <div className="footer-wrapper__dark_bg"></div>
        <div className="container">
          <div className="footer-wrapper__subscribe">
            <h2 className="title title--green">
              {t("footerComponent.subscribeTitle")}
            </h2>
            <p>{t("footerComponent.subscribeSubtitle")}</p>
            <a
              href="https://peercoin.us9.list-manage.com/subscribe/post?u=654917bb4b69bbc6d026587a9&id=222c7e0877"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="footer-wrapper__subscribe__link"
            >
              {t("footerComponent.subscribeBtnLabel")}
            </a>
          </div>
          <footer className="footer">
            <div className="footer__twitter">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="PeercoinPPC"
                options={{ width: 265, height: 350 }}
              />
            </div>

            <nav className="footer__links">
              <ul className="footer__links__list">
                <li className="footer__links__list__title">
                  {t("footerComponent.links.learn.title")}
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footerComponent.links.learn.linkPeercoinUniversity")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/#/2-what-is-a-blockchain-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footerComponent.links.learn.linkWhatIsBlockchain")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/#/6-inherent-centralization-of-proof-of-work-blockchains"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(
                      "footerComponent.links.learn.linkInherentCentralization"
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/#/9-peercoin-proof-of-stake-consensus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(
                      "footerComponent.links.learn.linkPeercoinProofOfStakeConsensus"
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/#/10-efficient-sustainable-security"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(
                      "footerComponent.links.learn.linkEfficientSustainableSecurity"
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/#/11-economics-of-peercoin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footerComponent.links.learn.linkEconomicsOfPeercoin")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/#/12-scalability-of-peercoin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footerComponent.links.learn.linkScalabilityOfPeercoin")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/docs/#/frequently-asked-questions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footerComponent.links.learn.linkFAQ")}
                  </a>
                </li>
              </ul>
              <ul className="footer__links__list">
                <li className="footer__links__list__title">
                  <a href="/#getstarted">
                    {t("footerComponent.links.getStarted.title")}
                  </a>
                </li>
                <li className="footer__links__list__title">
                  <Link to="/resources">
                    {t("footerComponent.links.resources.title")}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footerComponent.links.resources.linkDocumentation")}
                  </a>
                </li>
                <li>
                  <a href="/resources#exchanges">
                    {t("footerComponent.links.resources.linkExchanges")}
                  </a>
                </li>
                <li>
                  <a href="/resources#mining">
                    {t("footerComponent.links.resources.linkMining")}
                  </a>
                </li>
                <li>
                  <a href="/resources#blockexplorers">
                    {t("footerComponent.links.resources.linkBlockExplorers")}
                  </a>
                </li>
                <li>
                  <a href="/resources#whitepaper">
                    {t("footerComponent.links.resources.linkWhitepaper")}
                  </a>
                </li>
                <li>
                  <a href="/resources#graphics">
                    {t("footerComponent.links.resources.linkGraphics")}
                  </a>
                </li>
              </ul>
              <ul className="footer__links__list">
                <li className="footer__links__list__title">
                  <Link to="/wallet">
                    {t("footerComponent.links.wallet.title")}
                  </Link>
                </li>
                <li className="footer__links__list__title">
                  {t("footerComponent.links.project.title")}
                </li>
                <li>
                  <a
                    href="https://github.com/peercoin/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t("footerComponent.links.project.linkGithub")}
                  </a>
                </li>
                <li>
                  <a href="/projects">
                    {t("footerComponent.links.project.linkProjects")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.peercoin.net/blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footerComponent.links.project.linkBlog")}
                  </a>
                </li>
                <li>
                  <a href="/foundation">
                    {t("footerComponent.links.project.linkFoundation")}
                  </a>
                </li>
                <li>
                  <Link to="/contact">
                    {t("footerComponent.links.project.linkContact")}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy">
                    {t("footerComponent.links.project.linkPrivacyPolicy")}
                  </Link>
                </li>
              </ul>
              <ul className="footer__links__list">
                <li className="footer__links__list__title">
                  <a href="/resources#communities">
                    {t("footerComponent.links.community.title")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://talk.peercoin.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footerComponent.links.community.linkForum")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/PeercoinPPC"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t("footerComponent.links.community.linkTwitter")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/peercoin"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t("footerComponent.links.community.linkTelegram")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Peercoin/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t("footerComponent.links.community.linkFacebook")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/peercoin"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t("footerComponent.links.community.linkReddit")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/XPxfwtG"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t("footerComponent.links.community.linkDiscord")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/PeerCoin"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t("footerComponent.links.community.linkYoutube")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://bitcointalk.org/index.php?topic=101820.0"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {t("footerComponent.links.community.linkBitcointalk")}
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
        <div className="footer-wrapper__copyright">
          {t("footerComponent.copyright.copyright")} {new Date().getFullYear()}{" "}
          {t("footerComponent.copyright.rights")}
        </div>
      </div>
    </div>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Footer />
    </Suspense>
  );
}

export default HoF;
