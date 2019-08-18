import React from 'react';
import './Contact.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

function Contact() {
  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">Contact Us</h1>
        <p className="hero__description">
        For general inquiries, the Peercoin Foundation is here to answer!
        </p>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">Contact Us</h2>
              <p>For technical support or troubleshooting with wallets, mining, or other general questions, please visit Peercointalk or one of the many other community resources. For other inquiries, use this link:</p>
              <a href="mailto:foundation@peercoin.net" className="btn btn--green">Contact Us</a>

              <h2 className="title title--green title--left">Technical Support</h2>
              <p>Do you need help with a technical issue? You can find support and other great community resources on Peercointalk.</p>
              <a href="https://talk.peercoin.net/" className="btn btn--green">Peercointalk</a>
            </div>
            <div className="col col--small">
              <h2 className="title title--green title--left">Contact Us</h2>
              <p>
                Address:<br />
                <b>Stichting Peercoin Foundation</b><br />
                Postbus 7875<br />
                1008AB AMSTERDAM<br />
                The Netherlands<br /><br />
                RSIN: 858715958
              </p>
              
              <h2 className="title title--green title--left">Documentation</h2>
              <p>Are you a developer looking for more information on Peercoin? Check out our documentation.</p>
              <a href="https://docs.peercoin.net/" className="btn btn--green">Documentation</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">Frequently Asked Questions</h2>
              <div className="faq">
                <h4>How old is the Peercoin project?</h4>
                <p>Peercoin's chain started on August 19th, 2012 at 18:00:00 UTC. There was no premine and the launch of the project was announced nine days before it went live. You can read the original announcement thread here: https://bitcointalk.org/index.php?topic=101820.0</p>

                <h4>How can I mine Peercoin?</h4>
                <p>Peercoin uses the SHA256 cryptographic hash function. Any hardware that can effectively mine Bitcoin can be used to mine Peercoin.</p>
                
                <h4>Why a 1% minting return on staking? Why isn't there a hard limit on the total number of PPC? Doesn't this disqualify Peercoin as a deflationary currency?</h4>
                <p>Peercoin has a 1% inflation rate to allow for participant determined growth over time. Fully deflationary currencies cannot be used as mediums of exchange, but rather solely stores of value. By allowing for a manageable inflation rate, Peercoin remains scarce while allowing for growth determined by participation. This also helps offset coins that are removed from circulation through lost wallets or malevolent destruction.</p>

                <h4>Why a fixed transaction fee?</h4>
                <p>Peercoin has a fixed transaction fee that filters out the kind of spam transactions that have damaged chains like Bitcoin. A fixed fee also allows for predictable sending fees, which may become unpredictable on chains where fees can rapidly change, leaving transactions in limbo for several days. This allows for first come, first served transactions as well. Peercoin is able to scale without worrying about valuation effecting usability. In version 0.7, the transaction fee is being lowered from 0.01 Peercoin to 0.001 Peercoin.</p>

                <h4>How can the Peercoin network survive without miners providing PoW security, especially during times of low interest?</h4>
                <p>Proof-of-work serves as an inflationary mechanism to distribute coins. The Peercoin network is secured by coin age and proof-of-stake. With pure proof-of-work chains, holders have little ability to secure the chain with the high cost of mining equipment acing as a barrier to entry. Any Peercoin holder can protect their investment by allowing a transaction to mature and leaving their wallet open. Proof-of-stake minting has kept the network secure since Peercoin's inception.</p>

                <h4>I just moved PPC to my wallet and it says I have a zero percent chance of minting in the next 30 days. Why is that?</h4>
                <p>Peercoin transactions must mature 30 days or roughly 4320 blocks before they can become eligible for minting. This number is updated roughly every six hours. Once the 30 day period passes, your coins will become eligible and the minting probability should adjust accordingly.</p>

                <h4>How many confirmations are required on the Peercoin network for a transaction?</h4>
                <p>Six confirmations are required for a transaction to be verified. Each block takes about 10 minutes.</p>

                <h4>I just minted some coins but it says they are unavailable at the moment. Why is that?</h4>
                <p>Once a transaction mints, it takes 520 confirmations before these coins become unlocked. This is done to prevent spoofed minting. Each block on the Peercoin network takes about 10 minutes, so it takes 5,200 minutes or around 3.6 days for the minted coins to become available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;