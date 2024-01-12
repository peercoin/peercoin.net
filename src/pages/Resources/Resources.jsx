import React, { Suspense, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import renderHTML from "react-render-html";
import "./Resources.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Resources() {
  const { t } = useTranslation();
  const [explorers, setExplorers] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [wrappedPPC, setWrappedPPC] = useState([]);
  const [tools, setTools] = useState([]);
  const [community, setCommunity] = useState([]);
  const [whitepaper, setWhitepaper] = useState([]);
  const [graphics, setGraphics] = useState([]);

  useEffect(() => {
    fetch("/data/explorers.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setExplorers(jsonData);
      });

    fetch("/data/exchanges.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setExchanges(jsonData);
      });

    fetch("/data/wrapped_ppc.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setWrappedPPC(jsonData);
      });

    fetch("/data/tools.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setTools(jsonData);
      });

    fetch("/data/community.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setCommunity(jsonData);
      });

    fetch("/data/whitepaper.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setWhitepaper(jsonData);
      });

    fetch("/data/graphics.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setGraphics(jsonData);
      });
  }, []);

  return (
    <div className="ResourcesPage">
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t("resourcesPage.title")}</h1>
        <p className="hero__description">{t("resourcesPage.description")}</p>
        <div className="hero__actions">
          <a
            href="#exchanges"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action1")}
          </a>
          <a
            href="#wrapped-ppc"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.wrapedPPCTitle")}
          </a>
          <a
            href="#blockexplorers"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action2")}
          </a>
          <a
            href="#communities"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action3")}
          </a>
          <a
            href="#whitepaper"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action4")}
          </a>
          <a
            href="#graphics"
            className="hero__actions__action hero__actions__action--white"
          >
            {t("resourcesPage.actions.action5")}
          </a>
        </div>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">
                {t("resourcesPage.contributeTitle")}
              </h2>
              <p>{t("resourcesPage.contributeText")}</p>
              <a
                href="https://github.com/peercoin/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn btn--green"
              >
                {t("resourcesPage.contributeBtn")}
              </a>
            </div>
            <div className="col">
              <h2 className="title title--green title--left">
                {t("resourcesPage.documentationTitle")}
              </h2>
              <p>{t("resourcesPage.documentationText")}</p>
              <a
                href="https://peercoin.net/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--green"
              >
                {t("resourcesPage.documentationBtn")}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="anchor" data-id="mining"></div>
              <h2 className="title title--green title--left">
                {t("resourcesPage.miningTitle")}
              </h2>
              <p>{t("resourcesPage.miningText1")}</p>
              <p>{t("resourcesPage.miningText2")}</p>
              <ul>
                <li>
                  <a
                    href="http://bfgminer.org/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    BFGMiner
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ckolivas/cgminer"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    CGMiner
                  </a>
                </li>
                <li>
                  <a
                    href="https://easyminer.net/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    EasyMiner
                  </a>
                </li>
              </ul>
              <a
                href="https://peercoin.net/docs/#/mining"
                className="btn btn--green"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("resourcesPage.miningBtn1")}
              </a>
              <a
                href="https://www.coinwarz.com/calculators/peercoin-mining-calculator"
                className="btn btn--green"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {t("resourcesPage.miningBtn2")}
              </a>
            </div>
            <div className="col">
              <div className="anchor" data-id="university"></div>
              <h2 className="title title--green title--left">
                {t("resourcesPage.universityTitle")}
              </h2>
              <p>{t("resourcesPage.universityText1")}</p>
              <p>{t("resourcesPage.universityText2")}</p>
              <ul>
                <li>
                  <a
                    href="https://peercoin.net/university/#/2-what-is-a-blockchain-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("resourcesPage.universityLink1")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/#/6-inherent-centralization-of-proof-of-work-blockchains"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("resourcesPage.universityLink2")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://peercoin.net/university/#/9-peercoin-proof-of-stake-consensus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("resourcesPage.universityLink3")}
                  </a>
                </li>
              </ul>
              <a
                href="https://peercoin.net/university/"
                className="btn btn--green"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("resourcesPage.universityBtn")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="anchor" data-id="exchanges"></div>
        <div className="container">
          <h2 className="title title--green">{t(exchanges.title)}</h2>
          {exchanges.description ? (
            <p className="description">{t(exchanges.description)}</p>
          ) : null}
          <div className="blocks-list">
            {exchanges.resources &&
              exchanges.resources.map((exchange) => (
                <a
                  key={exchange.title}
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="blocks-list__block"
                >
                  <h4 className="blocks-list__block__title">
                    {exchange.title}
                  </h4>
                  <img
                    className="blocks-list__block__img"
                    src={exchange.image}
                    alt={exchange.title}
                  />
                  <div className="blocks-list__block__type">
                    {t(exchange.type)}
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="main">
        <div className="anchor" data-id="wrapped-ppc"></div>
        <div className="container">
          <h2 className="title title--green">{t(wrappedPPC.title)}</h2>
          {wrappedPPC.description ? (
            <p className="description">{t(wrappedPPC.description)}</p>
          ) : null}
          {wrappedPPC.contractAddresses ? (
            <div className="text-sections" style={{ textAlign: "center" }}>
              <p className="description">{t(wrappedPPC.contractAddresses)}</p>
              <>
                {wrappedPPC.addresses.map((address) => (
                  <div>
                    <a
                      href={address.explorerUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      {address.title} ({address.address})
                    </a>
                    <br />
                  </div>
                ))}
              </>
            </div>
          ) : null}
          <div className="blocks-list">
            {wrappedPPC.resources &&
              wrappedPPC.resources.map((exchange) => (
                <a
                  key={exchange.title}
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="blocks-list__block"
                >
                  <h4 className="blocks-list__block__title">
                    {exchange.title}
                  </h4>
                  <img
                    className="blocks-list__block__img"
                    src={exchange.image}
                    alt={exchange.title}
                  />
                  <div className="blocks-list__block__type">
                    {t(exchange.type)}
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="main">
        <div className="anchor" data-id="blockexplorers"></div>
        <div className="container">
          <h2 className="title title--green">{t(explorers.title)}</h2>
          {explorers.categories &&
            explorers.categories.map((category) => (
              <div key={category.title}>
                <h3 className="title title--green">
                  {category.title ? t(category.title) : null}
                </h3>
                <div className="blocks-list">
                  {category.resources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="blocks-list__block"
                    >
                      <h4 className="blocks-list__block__title">
                        {resource.title}
                      </h4>
                      <img
                        className="blocks-list__block__img"
                        src={resource.image}
                        alt={resource.title}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="tools"></div>
        <div className="container">
          <h2 className="title title--green">{t(tools.title)}</h2>
          <div className="blocks-list">
            {tools.resources &&
              tools.resources.map((tool) => (
                <a
                  key={tool.title}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="blocks-list__block"
                >
                  <h4 className="blocks-list__block__title">{t(tool.title)}</h4>
                  <img
                    className="blocks-list__block__img"
                    src={tool.image}
                    alt={t(tool.title)}
                  />
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="communities"></div>
        <div className="container">
          <h2 className="title title--green">{t(community.title)}</h2>
          <div className="blocks-list">
            {community.resources &&
              community.resources.map((community) => (
                <a
                  key={community.title}
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="blocks-list__block"
                >
                  <h4 className="blocks-list__block__title">
                    {community.title}
                  </h4>
                  <img
                    className="blocks-list__block__img"
                    src={community.image}
                    alt={community.title}
                  />
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="whitepaper"></div>
        <div className="container">
          <h2 className="title title--green">{t(whitepaper.title)}</h2>
          <div className="blocks-list">
            {whitepaper.resources &&
              whitepaper.resources.map((whitepaper) => (
                <a
                  key={whitepaper.title}
                  href={`/read${whitepaper.url}`}
                  className="blocks-list__block"
                >
                  <h4 className="blocks-list__block__title">
                    {t(whitepaper.title)}
                  </h4>
                  <img
                    className="blocks-list__block__img"
                    src={whitepaper.image}
                    alt={whitepaper.title}
                  />
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className="main">
        <div className="anchor" data-id="graphics"></div>
        <div className="container">
          <h2 className="title title--green">{t(graphics.title)}</h2>
          <p className="subtitle">{renderHTML(t(graphics.description))}</p>

          {graphics.categories &&
            graphics.categories.map((graphic) => (
              <div key={graphic.title}>
                <h3 className="title">{t(graphic.title)}</h3>
                <div className="blocks-list blocks-list--grey">
                  {graphic.resources.map((resource) => (
                    <div className="blocks-list__block" key={resource.image}>
                      <img
                        className="blocks-list__block__img"
                        src={resource.image}
                        alt=""
                      />
                      {resource.files.map((file) => (
                        <a
                          href={file.url}
                          key={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{file.type}</span>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}

          <p className="subtitle">
            {renderHTML(t("resourcesPage.graphicsZipFolder"))}.
          </p>
          <h2 className="title title--centere title--green">
            {t("resourcesPage.brandIdentityTitle")}
          </h2>
          <p className="subtitle subtitle--left">
            <b>{t("resourcesPage.brandIdentityColorsFonts")}</b>
          </p>
          <p className="subtitle subtitle--left">
            {t("resourcesPage.brandIdentityDisclaimer")}
          </p>
          <p className="subtitle subtitle--left">
            <code>{t("resourcesPage.brandIdentityGreen")}:</code>
            <br />
            <code>#3cb054</code>
            <br />
            <code>RBG: 60, 176, 84</code>
            <br />
            <code>CMYK: 66, 0, 52, 31</code>
          </p>
          <p className="subtitle subtitle--left">
            {t("resourcesPage.brandIdentityFont")}:<br />
            {t("resourcesPage.brandIdentityFontFont")}: FF Mark
            <br />
            {t("resourcesPage.brandIdentityFontType")}: Mark-Medium
          </p>
          <p className="subtitle subtitle--left">
            {renderHTML(t("resourcesPage.brandIdentityFontRoboto"))}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Resources />
    </Suspense>
  );
}

export default HoF;
