import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './Footer.scss';

function Footer() {
  return (
    <div className="main main--grey main--no_bottom">
      <div className="footer-wrapper">
        <div className="footer-wrapper__dark_bg"></div>
        <div className="container">
          <div className="footer-wrapper__subscribe">
            <h2 className="title title--green">Subscribe to Peercoin News</h2>
            <p>Stay up to date with the latest Peercoin news by signing up for our newsletter!</p>
            <a href="https://peercoin.us9.list-manage.com/subscribe/post?u=654917bb4b69bbc6d026587a9&id=222c7e0877" className="footer-wrapper__subscribe__link">Subscribe</a>
          </div>
          <footer className="footer">
            <div className="footer__twitter">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="PeercoinPPC"
              options={{width: 265, height: 350}}
            />
            </div>

            <nav className="footer__links">
              <ul className="footer__links__list">
                <li className="footer__links__list__title">Learn</li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/">Peercoin University</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/2-what-is-a-blockchain-">What is a Blockchain?</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/6-centralization-of-bitcoin">Inherent Centralization of Proof-of-Work Blockchains</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/9-peercoin-proof-of-stake-consensus">Peercoin &amp; Proof-of-Stake Consensus</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/10-first-efficient-sustainable-blockchain">Efficient &amp; Sustainable Security</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/11-economics-of-peercoin">Economics of Peercoin</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/12-scalability-of-peercoin-">Scalability of Peercoin</a></li>
                <li><a href="https://docs.peercoin.net/#/frequently-asked-questions">Frequently Asked Questions</a></li>
              </ul>
              <ul className="footer__links__list">
                <li className="footer__links__list__title">Get Started</li>
                <li className="footer__links__list__title">Resources</li>
                <li><a href="https://docs.peercoin.net/">Documentation</a></li>
                <li><a href="resources.html#exchanges">Exchanges</a></li>
                <li><a href="resources.html#blockexplorers">Block Explorers</a></li>
                <li><a href="resources.html#whitepaper">Whitepaper</a></li>
                <li><a href="resources.html#graphics">Graphics</a></li>                        
              </ul>
              <ul className="footer__links__list">
                <li className="footer__links__list__title">Wallet</li>
                <li className="footer__links__list__title">Project</li>
                <li><a href="https://github.com/peercoin/">GitHub</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="https://medium.com/peercoin">Blog</a></li>
                <li><a href="foundation.html">Foundation</a></li>
                <li><a href="privacypolicy.html">Privacy Policy</a></li>
              </ul>
              <ul className="footer__links__list">
                <li className="footer__links__list__title">Community</li>
                <li><a href="https://talk.peercoin.net/">Forum</a></li>
                <li><a href="https://www.reddit.com/r/peercoin">Reddit</a></li>
                <li><a href="https://t.me/peercoin">Telegram</a></li>
                <li><a href="https://discord.gg/XPxfwtG">Discord</a></li>
                <li><a href="https://bitcointalk.org/index.php?topic=101820.0;topicseen">Bitcointalk</a></li>
                <li><a href="https://www.facebook.com/Peercoin/">Facebook</a></li>
                <li><a href="https://twitter.com/PeercoinPPC">Twitter</a></li>
                <li><a href="https://www.youtube.com/user/PeerCoin">Youtube</a></li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
