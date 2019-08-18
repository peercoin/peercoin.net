import React from 'react';
import './Foundation.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

function Foundation() {
  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <img src="/img/logo-foundation-white.png" alt="Peercoin Foundation" className="logo-foundation"/>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">Mission Statement</h2>
              <p>The Peercoin Foundation has been established with the simple mission of promoting and supporting the continued education, development, and overall progression of the Peercoin project. We seek to empower future Peercoin team members by providing the tools necessary to perpetuate Peercoin's long standing reputation for bringing world-first innovations to the Blockchain.</p>
              
              <h2 className="title title--green title--left">Community Support</h2>
              <p>If you would like to get involved with Peercoin, or would simply like to support the team, there are a handful of options at your disposal. If you are interested in becoming a developer for Peercoin or Peercoin related projects such as PeerAssets, send us an email at foundation@peercoin.net. If you would like to donate PPC to the Peercoin Foundation to support the expansion of a project, simply send your PPC donation to the multisignature address below.</p>
              <p>
              General Fund - PPC Donation Address: <b>p92W3t7YkKfQEPDb7cG9jQ6iMh7cpKLvwK</b><br />
              General Fund - BTC Donation Address: <b>376NhxVL1LFBFndHNx9k7hvwvUzq6RZiPT</b><br />
              Exchange Listing Fund - BTC Donation Address: <b>3NtJTUyXuH8KJj4BXJJxtQS7SPnLNm711CM</b>
              </p>
            </div>
            <div className="col col--small">
              <h2 className="title title--green title--left">Contact Us</h2>
              <p>
                <b>Stichting Peercoin Foundation</b><br />
                Postbus 7875<br />
                1008AB AMSTERDAM<br />
                The Netherlands<br />
              </p>
              <p>
                <a href="mailto:foundation@peercoin.net">foundation@peercoin.net</a><br />
                RSIN: 858715958 
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Foundation;