import React from 'react';
import './Projects.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

function Projects() {
  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">Projects</h1>
        <p className="hero__description">
        Projects that are being developed within the Peercoin ecosystem to increase usage of the blockchain.
        </p>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">PeerAssets</h2>
              <p>A simple explanation on the PeerAssets protocol would be that it works by writing and reading messages on the blockchain, where messages represent assets and addresses represent peers.</p>
              <p> PeerAsset protocol based assets can be utilized to represent any type of asset like bonds or equity. PeerAssets can also represent real life objects, and by doing so confirm their existence on the blockchain. PeerAssets is a light protocol, as it utilizes no extra layers over the underlying blockchain. It does not require external value tokens beside the blockchain's native currency, which is used to pay transaction fees. PeerAssets does not participate in organizing nor maintaining of the public ledger, but takes advantage of its stability and trustworthiness. PeerAssets can work on top of every cryptocurrency that is forked from Bitcoin and has kept a compatible codebase, which includes Peercoin, Litecoin and alike.</p>
              <p> PeerAssets requires no hard nor soft fork of the host network, but it requires development of a PeerAssets aware client. PeerAssets is also inspired by the original idea of "Colored Coins" and uses OP_RETURN to write data on the blockchain, but offers some optimizations to reduce the amount of data written in OP_RETURN. PeerAssets enables easy querying of the blockchain for relevant transactions and offers some extra features like shareholder voting and dividend payouts.</p>
              <p>To get started, <a href="https://medium.com/@buckkets/basic-deck-creation-with-peerassets-tutorial-e416415b3cc8">check out this basic tutorial on deck creation.</a></p>
              <a href="https://github.com/PeerAssets" className="btn btn--green">GitHub</a>
              <a href="https://peerassets.github.io/WhitePaper/" className="btn btn--green">WhitePaper</a>
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

export default Projects;