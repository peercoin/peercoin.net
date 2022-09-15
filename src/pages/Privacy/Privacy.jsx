import React, { Suspense } from "react";
import "./Privacy.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function Privacy() {
  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">Privacy Policy</h1>
      </div>

      <div className="PrivacyPage main text-sections">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: 12/15/2018</p>
          <h2>Links</h2>
          <p>
            Peercoin.net contains links to external sites. Peercoin is not
            responsible for the content, experience, security, or privacy
            practices of these sites. We encourage users to be aware when they
            leave the site and to read the external website's privacy statements
            that may collect personal user data.
          </p>

          <h1>Cookies Policy</h1>
          <h2>Cookies</h2>
          <p>
            We use "cookies" on this site. A cookie is a piece of data stored on
            a site visitor's hard drive to help us improve your access to our
            site and identify repeat visitors to our site. For instance, when we
            use a cookie to identify you, you would not have to log in a
            password more than once, thereby saving time while on our site.
            Cookies can also enable us to track and target the interests of our
            users to enhance the experience on our site. Usage of a cookie is in
            no way linked to any personally identifiable information on our
            site.
          </p>

          <h1>How Peercoin uses cookies</h1>
          <p>
            When you use and access the Service, we may place a number of
            cookies files in your web browser. We use cookies for the following
            purposes: to enable certain functions of the Service, to provide
            analytics, and to store your preferences. We use both session and
            persistent cookies on the Service and we use different types of
            cookies to run the Service:
          </p>

          <h1>Third-party cookies</h1>
          <p>
            In addition to our own cookies, we may also use various third-party
            cookies to report usage statistics of the Service, deliver
            advertisements on and through the Service, and so on.
          </p>

          <h1>What are your choices regarding cookies</h1>
          <p>
            If you'd like to delete cookies or instruct your web browser to
            delete or refuse cookies, please visit the help pages of your web
            browser.
          </p>
          <p>
            {" "}
            Please note, however, that if you delete cookies or refuse to accept
            them, you might not be able to use all of the features we offer, you
            may not be able to store your preferences, and some of our pages
            might not display properly.
          </p>

          <h1>Where can you find more information about cookies </h1>
          <p>
            You can learn more about cookies and the following third-party
            websites:
          </p>
          <ul>
            <li>AllAboutCookies: https://www.allaboutcookies.org/</li>
            <li>
              Network Advertising Initiative:
              https://www.networkadvertising.org/
            </li>
          </ul>

          <h1>Changes to the Peercoin Privacy Policy</h1>
          <p>
            From time to time, we may update our Privacy Policy. You will not be
            notified. As such, we encourage you to periodically review these
            policies for the latest information on practices.
          </p>
          <p>
            Icons provided by{" "}
            <a
              href="https://icons8.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              icons8.com
            </a>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Privacy />
    </Suspense>
  );
}

export default HoF;
