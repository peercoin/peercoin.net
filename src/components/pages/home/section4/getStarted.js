import React from "react";
import $ from "jquery";
// import Particles from 'react-particles-js';

import graduationCap from "../../../../assets/images/icons/graduationcap_white.png";
import sidecardLearn from "../../../../assets/images/icons/sidecard-learn.png";
import purchasingWhite from "../../../../assets/images/icons/purchasing_white.png";
import anvil from "../../../../assets/images/icons/anvil.png";
import sidecardAnvil from "../../../../assets/images/icons/sidecard-anvil.png";
import sidecardPurchasing from "../../../../assets/images/icons/sidecard-purchasing.png";
import sidecardWallet from "../../../../assets/images/icons/sidecard-wallet.png";
import sidecardCommunity from "../../../../assets/images/icons/sidecard-community.png";
import wallets from "../../../../assets/images/icons/wallets.png";
import pickaxe from "../../../../assets/images/icons/pickaxe.png";
import communityWhite from "../../../../assets/images/icons/community_white.png";
import sidecardMining from "../../../../assets/images/icons/sidecard-mining.png";

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-wow-delay=".2s" className="row wow fadeIn">
        <div className="col-md-12">
          <h1 className="title">
            <a name="getstarted" className="linked">
              Get Started
            </a>
          </h1>
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="wallets_dropdown">
                <h5
                  data-toggle="collapse"
                  data-target="#collapsezero"
                  ariaExpanded={true}
                  aria-controls="collapsezero"
                  class
                >
                  <a id="learn">
                    <span>
                      <img src={graduationCap} alt="" />
                    </span>
                    Learn
                  </a>
                </h5>
              </div>
              <div
                id="collapsezero"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        For an in-depth overview of the project,{" "}
                        <a
                          href="https://university.peercoin.net/"
                          className="intext"
                        >
                          Peercoin University
                        </a>{" "}
                        is the best starting place. For more articles and
                        writings on Peercoin, check out our{" "}
                        <a
                          href="https://medium.com/peercoin"
                          className="intext"
                        >
                          Medium Blog
                        </a>
                        .<br />
                        <br />
                        For those who are looking to develop, PeerAssets is
                        Peercoin’s second layer solution for tokens. More
                        information can be found on our{" "}
                        <a href="projects.html" className="intext">
                          projects
                        </a>{" "}
                        page.
                        <br />
                        <br />A wealth of technical information can be found in
                        the{" "}
                        <a href="https://docs.peercoin.net/" className="intext">
                          Peercoin Documentation
                        </a>{" "}
                        as well.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src={sidecardLearn} alt="" className="sidecard" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="purchasing_dropdown">
                <h5
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>
                    <img src={purchasingWhite} alt="" />
                  </span>
                  Purchase
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Peercoin is available through a variety of exchanges and
                        services. You can{" "}
                        <a href="resources.html#exchanges" className="intext">
                          check here for a list
                        </a>
                        .<br />
                        <br />A guide to buying Peercoin is also available{" "}
                        <a
                          href="https://docs.peercoin.net/#/purchase"
                          className="intext"
                        >
                          here
                        </a>
                        .
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={sidecardPurchasing}
                        alt=""
                        className="sidecard"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="purchasing_dropdown">
                <h5
                  data-toggle="collapse"
                  data-target="#collapsetwo"
                  aria-expanded="true"
                  aria-controls="collapsetwo"
                >
                  <span>
                    <img src={wallets} alt="" />
                  </span>
                  Wallet
                </h5>
              </div>
              <div
                id="collapsetwo"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        {"The <a href='wallet.html' className='intext'>Peercoin wallet</a> is available on Windows, Mac OSX, and Linux platforms.<br> <br>" +
                          "Command-line experiences are also available.<br /><br />" +
                          "To get started, check out the Wallet download page and the Installation guide's."}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src={sidecardWallet} alt="" className="sidecard" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="minting_dropdown">
                <h5
                  data-toggle="collapse"
                  data-target="#collapsethree"
                  aria-expanded="true"
                  aria-controls="collapsethree"
                >
                  <span>
                    <img src={anvil} alt="" />
                  </span>
                  Mint
                </h5>
              </div>
              <div
                id="collapsethree"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Proof-of-stake minting is an efficient process where
                        stakeholders mint new blocks for the network. These
                        blocks contain transactions that were initiated by users
                        of the network. The role of the minter is to process
                        these blocks of transactions and provide security for
                        the network. <br />
                        <br />
                        Minting is an energy and cost efficient process, which
                        makes it possible for stakeholders to participate using
                        many different types of devices. Stakeholders
                        participate in minting simply by installing the version
                        of Peercoin they support, loading their wallet with PPC,
                        and holding them while they are occasionally selected by
                        Peercoin’s protocol to mint the next block in the chain.
                        Every minted block rewards stakeholders with new PPC.{" "}
                        <br />
                        <br />
                        To learn how to mint, check out the minting section in
                        the{" "}
                        <a
                          href="https://docs.peercoin.net/#/wallets"
                          className="intext"
                        >
                          wallets documentation
                        </a>
                        . More general information about minting can be found{" "}
                        <a
                          href="https://docs.peercoin.net/#/peercoin-minting-behaviour"
                          className="intext"
                        >
                          here
                        </a>
                        .
                      </p>
                    </div>
                    <div className="col-md-6 justify-content-center">
                      <img src={sidecardAnvil} alt="" className="sidecard" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="mining_dropdown">
                <h5
                  data-toggle="collapse"
                  data-target="#collapsefour"
                  aria-expanded="true"
                  aria-controls="collapsefour"
                >
                  <span>
                    <img src={pickaxe} alt="" />
                  </span>
                  Mine
                </h5>
              </div>
              <div
                id="collapsefour"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Peercoin uses the hashcash double iterated SHA-256
                        algorithm for proof-of-work mining. This means any
                        hardware that can mine Bitcoin can mine Peercoin as
                        well.
                        <br />
                        <br />
                        To get started, check out the{" "}
                        <a
                          href="https://docs.peercoin.net/#/mining"
                          className="intext"
                        >
                          mining documentation
                        </a>
                        .
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src={sidecardMining} alt="" className="sidecard" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5
                  data-toggle="collapse"
                  data-target="#collapsefive"
                  aria-expanded="true"
                  aria-controls="collapsefive"
                >
                  <span>
                    <img src={communityWhite} alt="" />
                  </span>
                  Community
                </h5>
              </div>
              <div
                id="collapsefive"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Join our{" "}
                        <a href="https://talk.peercoin.net/" className="intext">
                          Forum
                        </a>
                        ,{" "}
                        <a href="https://discord.gg/XPxfwtG" className="intext">
                          Discord
                        </a>
                        , or{" "}
                        <a href="https://t.me/peercoin" className="intext">
                          Telegram
                        </a>{" "}
                        to chat with other Peercoin community members and
                        developers. Subscribe to our{" "}
                        <a
                          href="https://twitter.com/PeercoinPPC"
                          className="intext"
                        >
                          Twitter
                        </a>
                        ,{" "}
                        <a
                          href="https://www.reddit.com/r/peercoin"
                          className="intext"
                        >
                          Reddit
                        </a>
                        ,{" "}
                        <a
                          href="https://medium.com/peercoin"
                          className="intext"
                        >
                          Medium Blog
                        </a>
                        , or{" "}
                        <a
                          href="https://peercoin.us9.list-manage.com/subscribe/post?u=654917bb4b69bbc6d026587a9&id=222c7e0877"
                          className="intext"
                        >
                          Newsletter
                        </a>{" "}
                        to stay up to date with all the latest Peercoin news.
                        Check{" "}
                        <a href="resources.html#communities" className="intext">
                          here
                        </a>{" "}
                        for a list of all other community resources.
                        <br />
                        <br />
                        Important updates can also be delivered directly to your
                        mobile device through platforms like{" "}
                        <a href="https://blockfolio.com/" className="intext">
                          Blockfolio
                        </a>
                        ,{" "}
                        <a href="https://delta.app/" className="intext">
                          Delta
                        </a>
                        , and{" "}
                        <a href="https://www.coingecko.com/" className="intext">
                          CoinGecko
                        </a>
                        . Subscribe to stay up to date with the latest news.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={sidecardCommunity}
                        alt=""
                        className="sidecard"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
