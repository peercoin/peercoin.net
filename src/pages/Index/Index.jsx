import React from 'react';
import './Index.scss';
import Menu from '../../components/Menu/Menu';

function Index() {
  return (
    <>
    <Menu />
    <div className="hero">
      <img src="/img/logo-white.svg" alt="Peercoin Logo" width="220" />
      <h1 className="hero__title">Pioneer of Proof of Stake</h1>
      <p className="hero__description">
        The world's first efficient and sustainable public blockchain, serving as a secure base layer and cryptocurrency for the future blockchain connected world.
      </p>
      <div className="hero__actions">
        <a href="/get-started" className="hero__actions__action">Get Started</a>
        <a href="/what-is-peercoin" className="hero__actions__action hero__actions__action--white">What is Peercoin?</a>
      </div>
    </div>
    <div className="main">
      <div className="container">
      <section className="home-description">
          <div className="home-description__text">
            <h2 className="home-description__text__title">Efficient Security</h2>
            <p>Peercoin (PPC) first came online in 2012, making it one of the earliest pioneering blockchains. The key innovation of Peercoin is its invention of proof-of-stake, an alternative consensus protocol to Bitcoin’s proof-of-work.</p>
            <p>Proof-of-work blockchains are secured by proving the consumption of a costly limited resource: electricity. Proof-of-stake replaces this expensive security protocol by utilizing an alternative scarce resource: time.</p>
            <p>Due to the cost efficient nature of proof-of-stake’s time based consensus rules, Peercoin is capable of allowing any network connected computer to participate in the blockchain’s security process. This efficiency strengthens Peercoin by growing the number of security providers and ensuring that security can be sustained over the long-term.</p>
          </div>
          <img className="home-description__img" src="/img/animations/efficient-and-sustainable.svg" alt=""/>
        </section>
        <section className="home-description">
          <img className="home-description__img" src="/img/animations/user-driven-governance.svg" alt=""/>
          <div className="home-description__text home-description__text--left">
            <h2 className="home-description__text__title">User Governance</h2>
            <p>In Peercoin, coin owners (stakeholders) are the ones who wield influence over the network, produce new blocks, and secure the chain. Stakeholders of Peercoin co-own the blockchain and collectively decide its future through protocol voting.</p>
            <p>Voting is carried out the same way Peercoin is secured, through a process called proof-of-stake minting. Stakeholders participate in minting simply by installing the version of Peercoin they support, loading their wallet with PPC, and holding them while they are occasionally selected by Peercoin’s protocol to mint the next block in the chain. Every minted block rewards stakeholders with new PPC and a vote.</p>
            <p>This makes Peercoin the first blockchain capable of allowing its protocol rules to be governed directly by its users, making for a network that is more decentralized, democratic, and easily secured by people around the world.</p>
          </div>
        </section>
        <section className="home-description">
          <div className="home-description__text">
            <h2 className="home-description__text__title">Efficient Security</h2>
            <p>Peercoin (PPC) first came online in 2012, making it one of the earliest pioneering blockchains. The key innovation of Peercoin is its invention of proof-of-stake, an alternative consensus protocol to Bitcoin’s proof-of-work.</p>
            <p>Proof-of-work blockchains are secured by proving the consumption of a costly limited resource: electricity. Proof-of-stake replaces this expensive security protocol by utilizing an alternative scarce resource: time.</p>
            <p>Due to the cost efficient nature of proof-of-stake’s time based consensus rules, Peercoin is capable of allowing any network connected computer to participate in the blockchain’s security process. This efficiency strengthens Peercoin by growing the number of security providers and ensuring that security can be sustained over the long-term.</p>
          </div>
          <img className="home-description__img" src="/img/animations/efficient-and-sustainable.svg" alt=""/>
        </section>
        <section className="home-description">
          <img className="home-description__img" src="/img/animations/user-driven-governance.svg" alt=""/>
          <div className="home-description__text home-description__text--left">
            <h2 className="home-description__text__title">User Governance</h2>
            <p>In Peercoin, coin owners (stakeholders) are the ones who wield influence over the network, produce new blocks, and secure the chain. Stakeholders of Peercoin co-own the blockchain and collectively decide its future through protocol voting.</p>
            <p>Voting is carried out the same way Peercoin is secured, through a process called proof-of-stake minting. Stakeholders participate in minting simply by installing the version of Peercoin they support, loading their wallet with PPC, and holding them while they are occasionally selected by Peercoin’s protocol to mint the next block in the chain. Every minted block rewards stakeholders with new PPC and a vote.</p>
            <p>This makes Peercoin the first blockchain capable of allowing its protocol rules to be governed directly by its users, making for a network that is more decentralized, democratic, and easily secured by people around the world.</p>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default Index;
