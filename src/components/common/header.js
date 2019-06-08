import React, { Component } from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseLang: this.props.lang
    };

    this.onLangChange = this.onLangChange.bind(this);
  }

  onLangChange(event) {
    this.setState({ chooseLang: event.target.value });

    window.location = "/?lang=" + event.target.value;
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="collaspe navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-center">
              <li id="home" className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>

              <li id="learn" className="nav-item">
                <a className="nav-link" href="#">
                  Learn
                </a>
                <ul className="submenuitem">
                  <div className="row">
                    <div className="col-12">
                      <li>
                        <a
                          href="https://peercoin.github.io/PeercoinUniversity/"
                          className="submenu"
                        >
                          Peercoin University
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://peercoin.github.io/PeercoinUniversity/#/2-what-is-a-blockchain"
                          className="submenu"
                        >
                          What is a Blockchain?
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://peercoin.github.io/PeercoinUniversity/#/6-centralization-of-bitcoin"
                          className="submenu"
                        >
                          Inherent Centralization of Proof-of-Work Blockchains
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://peercoin.github.io/PeercoinUniversity/#/9-peercoin-proof-of-stake-consensus"
                          className="submenu"
                        >
                          Peercoin & Proof-of-Stake Consensus
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://peercoin.github.io/PeercoinUniversity/#/10-first-efficient-sustainable-blockchain"
                          className="submenu"
                        >
                          Efficient & Sustainable Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://peercoin.github.io/PeercoinUniversity/#/11-economics-of-peercoin"
                          className="submenu"
                        >
                          Economics of Peercoin
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://peercoin.github.io/PeercoinUniversity/#/12-scalability-of-peercoin"
                          className="submenu"
                        >
                          Scalability of Peercoin
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://medium.com/peercoin/deflation-and-cryptocurrencies-the-long-term-ramifications-of-fixed-supply-currencies-c192f44dddc1"
                          className="submenu"
                        >
                          Deflation and Cryptocurrencies
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://medium.com/peercoin/peercoins-hybrid-chain-solution-to-proof-of-work-global-scaling-and-environmental-impact-c36757e89d6e"
                          className="submenu"
                        >
                          {"Peercoin 's"} Hybrid Chain Solution
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://medium.com/peercoin/the-rich-get-richer-concept-in-proof-of-stake-systems-82c5ceeff326"
                          className="submenu"
                        >
                          Rich get Richer Fallacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.peercoin.net/#/frequently-asked-questions"
                          className="submenu"
                        >
                          Frequently Asked Questions
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>

              <li id="get-started" className="nav-item">
                <a className="nav-link" href="/#getstarted">
                  Get Started
                </a>
              </li>

              <li id="resources" className="nav-item">
                <a className="nav-link" href="resources.html">
                  Resources
                </a>
                <ul className="submenuitem">
                  <li>
                    <a href="https://docs.peercoin.net/" className="submenu">
                      <span className="icon">
                        <img src="img/icons/docs_green.png" alt="" />
                        Documentation
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="resources.html#mining" className="submenu">
                      <span className="icon">
                        <img src="img/icons/pickaxe_green.png" alt="" />
                        Mining
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="resources.html#university" className="submenu">
                      <span className="icon">
                        <img src="img/icons/graduationcap.png" alt="" />
                        Peercoin University
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="resources.html#exchanges" className="submenu">
                      <span className="icon">
                        <img src="img/icons/exchange_green.png" alt="" />
                        Exchanges
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="resources.html#blockexplorers" className="submenu">
                      <span className="icon">
                        <img src="img/icons/block_green.png" alt="" />
                        Block Explorers
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="resources.html#whitepaper" className="submenu">
                      <span className="icon">
                        <img src="img/icons/whitepaper_green.png" alt="" />
                        Whitepaper
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="resources.html#graphics" className="submenu">
                      <span className="icon">
                        <img src="img/icons/graphics_green.png" alt="" />
                        Graphics
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li id="projects" className="nav-item">
                <a className="nav-link" href="#">
                  Project
                </a>
                <ul className="submenuitem">
                  <li>
                    <a href="https://github.com/peercoin/" className="submenu">
                      <span className="icon">
                        <img src="img/icons/github_green.png" alt="" />
                        GitHub
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="projects.html" className="submenu">
                      <span className="icon">
                        <img src="img/icons/projects_green.png" alt="" />
                        Projects
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/peercoin" className="submenu">
                      <span className="icon">
                        <img src="img/icons/blog_green.png" alt="" />
                        Blog
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="foundation.html" className="submenu">
                      <span className="icon">
                        <img src="img/icons/foundation_green.png" alt="" />
                        Peercoin Foundation
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="contactus.html" className="submenu">
                      <span className="icon">
                        <img src="img/icons/contact_green.png" alt="" />
                        Contact Us
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li id="wallet" className="nav-item">
                <a className="nav-link" href="wallet.html">
                  Wallet
                </a>
              </li>

              <li id="community" className="nav-item">
                <a className="nav-link" href="resources.html#communities">
                  Community
                </a>
                <ul className="submenuitem">
                  <li>
                    <a href="https://talk.peercoin.net/" className="submenu">
                      <span className="icon">
                        <img src="img/icons/forum_green.png" alt="" />
                        Forum
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/PeercoinPPC"
                      className="submenu"
                    >
                      <span className="icon">
                        <img src="img/icons/twitter_green.png" alt="" />
                        Twitter
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/Peercoin/"
                      className="submenu"
                    >
                      <span className="icon">
                        <img src="img/icons/facebook_green.png" alt="" />
                        Facebook
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/peercoin"
                      className="submenu"
                    >
                      <span className="icon">
                        <img src="img/icons/reddit_green.png" alt="" />
                        Reddit
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/r/peercoin"
                      className="submenu"
                    >
                      <span className="icon">
                        <img src="img/icons/telegram_green.png" alt="" />
                        Telegram
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/XPxfwtG" className="submenu">
                      <span className="icon">
                        <img src="img/icons/discord_green.png" alt="" />
                        Discord
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/user/PeerCoin"
                      className="submenu"
                    >
                      <span className="icon">
                        <img src="img/icons/youtube_green.png" alt="" />
                        Youtube
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bitcointalk.org/index.php?topic=101820.0"
                      className="submenu"
                    >
                      <span className="icon">
                        <img src="img/icons/bitcoinchat_green.png" alt="" />
                        Bitcointalk
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <div className="form-group">
                  <select
                    id="changeLanguage"
                    onChange={this.onLangChange}
                    value={this.state.chooseLang}
                    className="form-control"
                  >
                    <option value="en">en</option>
                    <option value="de">de</option>
                    <option value="es">es</option>
                    <option value="pt">pt</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
