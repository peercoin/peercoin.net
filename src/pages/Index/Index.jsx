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
        <a href="#" className="hero__actions__action">Get Started</a>
        <a href="#" className="hero__actions__action hero__actions__action--white">What is Peercoin?</a>
      </div>
    </div>
    </>
  );
}

export default Index;
