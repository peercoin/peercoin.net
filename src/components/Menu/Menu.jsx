import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";
import "./Menu.scss";
import { getCurrentFlag } from "../../helpers/Language";

function Menu() {
  const { t } = useTranslation();
  const triggerHeight = 100;
  const [isFixed, setIsFixed] = useState(window.scrollY > triggerHeight);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > triggerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });

    if (window.scrollY > triggerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, []);

  async function toggleMenu() {
    await setIsOpen(!isOpen);
  }

  function menuClass() {
    return classNames({
      menu: true,
      "menu--fixed": isFixed,
      "menu--open": isOpen,
    });
  }

  return (
    <>
      <div className="menu-trigger" onClick={toggleMenu}>
        <img src="/img/menu.png" alt="" />
      </div>
      <nav className={menuClass()}>
        <div className="menu__close" onClick={toggleMenu}>
          <img src="/img/back.png" alt="" />
        </div>
        <div className="container">
          {isFixed && (
            <Link to="/">
              <img
                src="/img/logo-menu-white.svg"
                alt="Peercoin"
                className="menu__logo"
              />
            </Link>
          )}
          <ul className="menu__main">
            <li>
              <Link to="/">{t("menuComponent.links.home.title")}</Link>
            </li>
            <li>
              <a href="/#getstarted">
                {t("menuComponent.links.getStarted.title")}
              </a>
            </li>
            <li>
              <Link to="/resources">
                {t("menuComponent.links.resources.title")}
              </Link>
              <img src="/img/icon-menu-arrow-down.svg" alt="" />
              <ul className="menu__main__submenu">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=x8KAsime9EI&list=PLvd1OhApu6fULYdoGIDBxlNl9qglo2vJG"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/youtube_green.png" alt="" />
                    Peercoin Primer
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.peercoin.net/university/"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/icons/graduationcap.png" alt="" />
                    {t("menuComponent.links.resources.peercoinUniversity")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.peercoin.net/docs/"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/icons/docs_green.png" alt="" />
                    {t("menuComponent.links.resources.documentation")}
                  </a>
                </li>
                <li>
                  <a href="/resources#mining" className="submenu">
                    <img src="/img/icons/pickaxe_green.png" alt="" />
                    {t("menuComponent.links.resources.mining")}
                  </a>
                </li>
                <li>
                  <a href="/resources#exchanges" className="submenu">
                    <img src="/img/icons/exchange_green.png" alt="" />
                    {t("menuComponent.links.resources.exchanges")}
                  </a>
                </li>
                <li>
                  <a href="/resources#wrapped-ppc" className="submenu">
                    <img src="/img/icons/wrapped_present.png" alt="" />
                    {t("resourcesPage.wrapedPPCTitle")}
                  </a>
                </li>
                <li>
                  <a href="/resources#blockexplorers" className="submenu">
                    <img src="/img/icons/block_green.png" alt="" />
                    {t("menuComponent.links.resources.blockExplorers")}
                  </a>
                </li>
                <li>
                  <a href="/resources#whitepaper" className="submenu">
                    <img src="/img/icons/whitepaper_green.png" alt="" />
                    {t("menuComponent.links.resources.whitepaper")}
                  </a>
                </li>
                <li>
                  <a href="/resources#graphics" className="submenu">
                    <img src="/img/icons/graphics_green.png" alt="" />
                    {t("menuComponent.links.resources.graphics")}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>{t("menuComponent.links.project.title")}</span>
              <img src="/img/icon-menu-arrow-down.svg" alt="" />
              <ul className="menu__main__submenu">
                <li>
                  <a
                    href="https://github.com/peercoin/"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/github_green.png" alt="" />
                    {t("menuComponent.links.project.github")}
                  </a>
                </li>
                <li>
                  <Link to="/projects" className="submenu">
                    <img src="/img/icons/projects_green.png" alt="" />
                    {t("menuComponent.links.project.projects")}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.peercoin.net/blog/"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/icons/blog_green.png" alt="" />
                    {t("menuComponent.links.project.blog")}
                  </a>
                </li>
                <li>
                  <Link to="/foundation" className="submenu">
                    <img src="/img/icons/foundation_green.png" alt="" />
                    {t("menuComponent.links.project.peercoinFoundation")}
                  </Link>
                </li>
                <li>
                  <Link to="/contribute" className="submenu">
                    <img src="/img/icons/pickaxe_green.png" alt="" />
                    {t("menuComponent.links.project.contribute")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="submenu">
                    <img src="/img/icons/contact_green.png" alt="" />
                    {t("menuComponent.links.project.contactUs")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/wallet">
                <span>{t("menuComponent.links.wallet.title")}</span>
              </Link>
            </li>
            <li>
              <Link to="/foundation#donate">
                <span>{t("menuComponent.links.donate.title")}</span>
              </Link>
            </li>
            <li>
              <span>{t("menuComponent.links.community.title")}</span>
              <img src="/img/icon-menu-arrow-down.svg" alt="" />
              <ul className="menu__main__submenu">
                <li>
                  <a
                    href="https://talk.peercoin.net/"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/icons/forum_green.png" alt="" />
                    {t("menuComponent.links.community.forum")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/PeercoinPPC"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/x_green.png" alt="" />
                    {t("menuComponent.links.community.twitter")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/peercoin"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/telegram_green.png" alt="" />
                    {t("menuComponent.links.community.telegram")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Peercoin/"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/facebook_green.png" alt="" />
                    {t("menuComponent.links.community.facebook")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/peercoin"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/reddit_green.png" alt="" />
                    {t("menuComponent.links.community.reddit")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/XPxfwtG"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/discord_green.png" alt="" />
                    {t("menuComponent.links.community.discord")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/PeerCoin"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/youtube_green.png" alt="" />
                    {t("menuComponent.links.community.youtube")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://bitcointalk.org/index.php?topic=101820.0"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/bitcoinchat_green.png" alt="" />
                    {t("menuComponent.links.community.bitcointalk")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://coinmarketcap.com/community/profile/Peercoin"
                    className="submenu"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img src="/img/icons/cmc_green.png" alt="" />
                    {t("menuComponent.links.community.cmc")}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <img
                  className="menu-flag"
                  src={`/img/flags/${getCurrentFlag()}.svg`}
                  alt="en-US"
                />
              </span>
              <img src="/img/icon-menu-arrow-down.svg" alt="" />
              <ul className="menu__main__submenu menu__main__submenu--small">
                <li onClick={() => i18n.changeLanguage("en-US")}>
                  <img
                    className="menu-flag"
                    src="img/flags/US.svg"
                    alt="en-US"
                  />
                </li>
                <li onClick={() => i18n.changeLanguage("cn")}>
                  <img className="menu-flag" src="img/flags/CN.svg" alt="cn" />
                </li>
                <li onClick={() => i18n.changeLanguage("de")}>
                  <img className="menu-flag" src="img/flags/DE.svg" alt="de" />
                </li>
                <li onClick={() => i18n.changeLanguage("es")}>
                  <img className="menu-flag" src="img/flags/ES.svg" alt="es" />
                </li>
                <li onClick={() => i18n.changeLanguage("fr")}>
                  <img className="menu-flag" src="img/flags/FR.svg" alt="fr" />
                </li>
                <li onClick={() => i18n.changeLanguage("ko")}>
                  <img className="menu-flag" src="img/flags/KO.svg" alt="ko" />
                </li>
                <li onClick={() => i18n.changeLanguage("pt")}>
                  <img className="menu-flag" src="img/flags/PT.svg" alt="pt" />
                </li>
                <li onClick={() => i18n.changeLanguage("pl")}>
                  <img className="menu-flag" src="img/flags/PL.svg" alt="pl" />
                </li>
                <li onClick={() => i18n.changeLanguage("ro")}>
                  <img className="menu-flag" src="img/flags/RO.svg" alt="ro" />
                </li>
                <li onClick={() => i18n.changeLanguage("ru")}>
                  <img className="menu-flag" src="img/flags/RU.svg" alt="ro" />
                </li>
                {/* <li onClick={() => i18n.changeLanguage('pt- BR')}><img className="menu-flag" src="img/flags/BR.svg" alt="pt-BR"/></li> */}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Menu />
    </Suspense>
  );
}

export default HoF;
