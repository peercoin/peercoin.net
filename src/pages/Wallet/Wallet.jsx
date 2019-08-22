import React from 'react';
import Collapsible from 'react-collapsible';
import './Wallet.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

function Wallet() {
  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">Wallets</h1>
        <p className="hero__description">
          Send, receive, and store Peercoin. The desktop wallet also enables minting blocks and securing of the network.
        </p>
        <div className="hero__actions">
          <a href="#install" className="hero__actions__action hero__actions__action--white">Installation</a>
          <a href="#paperwallet" className="hero__actions__action hero__actions__action--white">Paper Wallet</a>
          <a href="#unofficialclients" className="hero__actions__action hero__actions__action--white">Unofficial Wallets</a>
        </div>
      </div>

      <div className="main text-sections">
        <div className="container">
          <h2 className="title title--green">Desktop Wallets</h2>
          <div className="desktop-downloads">
            <div className="desktop-downloads__items">
              <div className="desktop-downloads__items__item">
                <a href="https://github.com/peercoin/peercoin/releases/download/v0.8.2.1ppc/peercoin-0.8.2-win64-setup-unsigned.exe" target="_blank" rel="noopener noreferrer">
                  <div className="desktop-downloads__items__item__title">Windows</div>
                  <img className="desktop-downloads__items__item__img" src="/img/icons/windows.png" alt="" />
                </a> 
                <div className="desktop-downloads__items__item__checksum">
                  <span>Checksum (SHA-256):</span>
                  83148a5ab61fbf4dbffbcf807787421dee0495e6018fb928d0a26fd2af0529ae
                </div>
              </div>
              <div className="desktop-downloads__items__item">
                <a href="https://github.com/peercoin/peercoin/releases/download/v0.8.2.1ppc/peercoin-0.8.2-osx-unsigned.dmg" target="_blank" rel="noopener noreferrer">
                  <div className="desktop-downloads__items__item__title">macOS</div>
                  <img className="desktop-downloads__items__item__img" src="/img/icons/apple.png" alt="" />
                </a>
                <div className="desktop-downloads__items__item__checksum">
                  <span>Checksum (SHA-256):</span>
                  b49be26ed42efe167b6d886cd02ea95e4a7ed4ad6f0fa80d98df50d807c24723
                </div>
              </div>
              <div className="desktop-downloads__items__item">
                <a href="https://github.com/peercoin/peercoin/releases/download/v0.8.2.1ppc/peercoin-0.8.2-x86_64-linux-gnu.tar.gz" target="_blank" rel="noopener noreferrer">
                  <div className="desktop-downloads__items__item__title">Linux</div>
                  <img className="desktop-downloads__items__item__img" src="/img/icons/linux.png" alt="" />
                </a>
                <div className="desktop-downloads__items__item__checksum">
                  <span>Checksum (SHA-256):</span>
                  81c416600d356f0d3fa04be0b97756c57441a33a85ce3a1dcf2e4d393d50726f
                </div>
              </div>
            </div>
            <div className="desktop-downloads__img">
              <img src="/img/wallets_splash.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="main main--dark" id="install">
        <div className="container">
          <h2 className="title title--white title--left">Installation</h2>

          <div className="timeline timeline--dark">
            <div className="timeline__body">
              <Collapsible open={true} trigger={<div className="timeline__body__section">Windows</div>}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>Windows</h2>
                    <ul>
                      <li>Open <code>peercoin-0.8.2-win64-setup-unsigned.exe</code></li>
                      <li>Default installation directory is <code>C:\Program Files\PPCoin or C:\Program Files\Peercoin</code></li>
                      <li>Run <code>peercoin-qt</code> or <code>peercoin</code> from the Start menu or the installation directory</li>
                    </ul>
                    <h2>Daemon</h2>
                    <ul>
                      <li>Create peercoin.conf in <code>%APPDATA%\PPCoin</code></li>
                      <li>Run <code>daemon\peercoind</code></li>
                      <li>Your wallet is located in <code>C:\Users\{`<username>`}\AppData</code> (hidden folder).</li>
                      <li>Open the folder with <code>Start menu -> Run...</code> (or press <code>Winkey-R</code>), type <code>%APPDATA%\PPCoin</code> into the field, and press Enter.</li>
                    </ul>
                    <p>Additional help can be found in the <a href="https://docs.peercoin.net/">Peercoin Documentation</a> or by asking on our <a href="https://talk.peercoin.net/">Forums</a>.</p>
                  </div>
                </div>
              </Collapsible>
              <Collapsible trigger={<div className="timeline__body__section">macOS</div>}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>macOS</h2>
                    <ul>
                      <li>Open <code className="green">peercoin-0.8.2-osx-unsigned.dmg</code></li>
                      <li>Mount <code className="green">Peercoin-Qt.dmg</code> by opening it</li>
                      <li>Drag <code className="green">Peercoin-Qt.app</code> or <code className="green">Peercoin.app</code> to <code className="green">Applications</code></li>
                      <li>Drag <code className="green">Peercoin-Qt.app</code> or <code className="green">Peercoin.app</code> to <code className="green">Applications</code></li>
                      <li>Go to <code className="green">Applications</code> and open <code className="green">Peercoin-Qt.app</code> or <code className="green">Peercoin.app</code></li>
                    </ul>
                    <h2>Daemon</h2>
                    <ul>
                      <li>Unzip <code className="green">peercoind.zip</code></li>
                      <li>Create <code className="green">ppcoin.conf</code> in <code className="green">~/Library/Application Support/PPCoin</code></li>
                      <li>Run <code className="green">peercoind</code></li>
                    </ul>
                    <p> Your wallet is located in <code>~/Library/Application Support/PPCoin</code>. To open the folder, press <code>Command-Shift-G</code> in Finder, insert the path, and press Enter.</p>
                    <p>Additional help can be found in the <a href="https://docs.peercoin.net/">Peercoin Documentation</a> or by asking on our <a href="https://talk.peercoin.net/">Forums</a>.</p>
                    <p></p>
                  </div>
                </div>
              </Collapsible>
              <Collapsible trigger={<div className="timeline__body__section">Linux</div>}>
                <div className="timeline__body__content">
                  <div className="timeline__body__content__text">
                    <h2>Linux</h2>
                    <ul>
                      <li>Unpack <code className="green">peercoin-0.8.2-x86_64-linux-gnu.tar.gz</code></li>
                      <li>Run <code className="green">bin/32/peercoin-qt</code> (requires libqt4-gui)</li>
                    </ul>
                    <h2>Daemon</h2>
                    <ul>
                      <li>Create <code className="green">peercoin.conf</code> in <code className="green">~/.peercoin</code></li>
                      <li>Run <code className="green">bin/32/peercoind</code></li>
                    </ul>
                    <p>Your wallet is located in <code>~/.peercoin</code>.</p>
                    <p><i>Note: 64 bit binaries available in <code>bin/64/[peercoin-qt,peercoind]</code>.</i></p>
                    <p>Additional help can be found in the <a href="https://docs.peercoin.net/">Peercoin Documentation</a> or by asking on our <a href="https://talk.peercoin.net/">Forums</a>.</p>
                    <p></p>
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
      <div className="main" id="paperwallet">
        <div className="container">
          <h2 className="title title--green">Paper Wallet</h2>
          <div className="blocks-list">
            <a href="https://paperwallet.peercoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Paper Wallet</h4>
              <img className="blocks-list__block__img" src="/img/explorers/peercoin_green.png" alt="" />
            </a>
          </div>
          <h2 className="title title--green" id="unofficialclients">Unofficial Wallets</h2>
          <div className="blocks-list">
            <a href="https://www.ledger.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Ledger</h4>
              <img className="blocks-list__block__img" src="/img/wallets/ledger.png" alt="" />
              <div className="blocks-list__block__type">Hardware Wallet</div>
            </a>
            <a href="https://www.cryptonator.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Cryptonator</h4>
              <img className="blocks-list__block__img" src="/img/wallets/cryptonator.png" alt="" />
              <div className="blocks-list__block__type">Mobile/Web Wallet</div>
            </a>
            <a href="http://uberpay.io/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">UberPay</h4>
              <img className="blocks-list__block__img" src="/img/wallets/uberpay.png" alt="" />
              <div className="blocks-list__block__type">Mobile/Web Wallet</div>
            </a>
            <a href="https://www.coinspot.com.au/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Coinspot</h4>
              <img className="blocks-list__block__img" src="/img/wallets/coinspot.png" alt="" />
              <div className="blocks-list__block__type">Web Wallet</div>
            </a>
            <a href="https://www.coinvault.io/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">CoinVault</h4>
              <img className="blocks-list__block__img" src="/img/wallets/coinvault.png" alt="" />
              <div className="blocks-list__block__type">Web Wallet</div>
            </a>
            <a href="https://holytransaction.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">HolyTransaction</h4>
              <img className="blocks-list__block__img" src="/img/wallets/holytransaction.png" alt="" />
              <div className="blocks-list__block__type">Web Wallet</div>
            </a>
            <a href="https://magnumwallet.co/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Magnum</h4>
              <img className="blocks-list__block__img" src="/img/wallets/magnum.png" alt="" />
              <div className="blocks-list__block__type">Mobile/Web Wallet</div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wallet;