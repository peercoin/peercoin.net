import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import renderHTML from "react-render-html";
import "./Bounty.scss";
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
                <h1 className="hero__title">{t('bountyPage.bountyTitle')}</h1>
                <p className="hero__description">
                    {t('bountyPage.bountyDescription')}
                </p>
            </div>

            <div className="main text-sections">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="title title--green title--left">
                                {t("bountyPage.bountyDisclosureHeader")}
                            </h3>
                            <p>{t("bountyPage.bountyDisclosureIntro")}</p>
                            <ul>
                                <li className="list-item">{t("bountyPage.bountyDisclosurePoint1")}</li>
                                <li className="list-item">{t("bountyPage.bountyDisclosurePoint2")}</li>
                            </ul>

                            <h2 className="title title--green title--left">
                                {t("bountyPage.bountySubmissionHeader")}
                            </h2>
                            <ul>
                                <li className="list-item">{t("bountyPage.bountySubmissionPoint1")}</li>
                                <li className="list-item">{t("bountyPage.bountySubmissionPoint2")}</li>
                                <li className="list-item">{t("bountyPage.bountySubmissionPoint3")}</li>
                                <li className="list-item">{t("bountyPage.bountySubmissionPoint4")}</li>
                            </ul>

                            <h2 className="title title--green title--left">
                                {t("bountyPage.bountyGuidelinesHeader")}
                            </h2>
                            <p>{t("bountyPage.bountyGuidelinesIntro1")}</p>
                            <ul>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint1")}</li>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint2")}</li>
                            </ul>

                            <div className="bounty-image-parent">
                                <img
                                    src="/img/bounty_chart.svg"
                                    alt="Peercoin Bounty Chart"
                                    className="bounty-image"
                                />
                            </div>

                            <p>{t("bountyPage.bountyGuidelinesIntro2")}</p>
                            <ul>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint3")}</li>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint4")}</li>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint5")}</li>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint6")}</li>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint7")}</li>
                            </ul>

                            <p>{t("bountyPage.bountyGuidelinesIntro3")}</p>
                            <ul>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint8")}</li>
                                <li className="list-item">{t("bountyPage.bountyGuidelinesPoint9")}</li>
                            </ul>

                            <h2 className="title title--green title--left">
                                {t("bountyPage.bountyScopeHeader")}
                            </h2>
                            <p>{t("bountyPage.bountyScopeIntro")}</p>

                            <h2 className="title title--green title--left">
                                {t("bountyPage.bountyContactHeader")}
                            </h2>
                            <p>{t("bountyPage.bountyContactIntro")}</p>
                            <p>{renderHTML(t("bountyPage.bountyContactEmail"))}</p>
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
            <Foundation />
        </Suspense>
    );
}

export default HoF;
