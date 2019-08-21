import React from 'react';
import './Resources.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

function Resources() {
  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">Resources</h1>
        <p className="hero__description">
        Tools and community resources: including exchanges, block explorers, graphics, social media, forums, chats and more!
        </p>
        <div className="hero__actions">
          <a href="#exchanges" className="hero__actions__action hero__actions__action--white">Exchanges</a>
          <a href="#blockexplorers" className="hero__actions__action hero__actions__action--white">Block Explorers</a>
          <a href="#communities" className="hero__actions__action hero__actions__action--white">Community</a>
          <a href="#whitepaper" className="hero__actions__action hero__actions__action--white">Whitepaper</a>
          <a href="#graphics" className="hero__actions__action hero__actions__action--white">Graphics</a>
        </div>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">Contribute</h2>
              <p>Peercoin is always under development and any developer is welcome to contribute. There are a variety of ways to contribute, including core development and writing documentation. Please check our GitHub below to get started.</p>
              <a href="#" className="btn btn--green">GitHub</a>
            </div>
            <div className="col">
              <h2 className="title title--green title--left">Documentation</h2>
              <p>To learn more about the technical details of Peercoin and how to use existing tools or framework, it is recommended that you start by reading the Peercoin documentation.</p>
              <a href="#" className="btn btn--green">Documentation</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">Mining</h2>
              <p>Peercoin uses the hashcash double iterated SHA-256 algorithm for proof-of-work mining. This means that any hardware that can mine Bitcoin can mine Peercoin as well.</p>
              <p> To mine Peercoin, you need mining software. Below is an unofficial list of mining software that has been found to have a decent reputation. </p>
              <ul>
                <li><a href="#">BFGMiner</a></li>
                <li><a href="#">CGMiner</a></li>
                <li><a href="#">EasyMiner</a></li>
              </ul>
              <a href="#" className="btn btn--green">Documentation</a>
              <a href="#" className="btn btn--green">Calculator</a>
            </div>
            <div className="col">
              <h2 className="title title--green title--left">Peercoin University</h2>
              <p> Peercoin University is an educational article geared toward less technical members of the community to help them understand the complex topic of public blockchain.</p>
              <p> The article starts off by explaining what a blockchain is, how it works, and its many benefits and use cases. Bitcoin and proof-of-work is detailed next, followed by Peercoin and proof-of-stake. Other topics include security, centralization, decentralization, scalability, and economics </p>
              <ul>
                <li><a href="#">What is a Blockchain?</a></li>
                <li><a href="#">Inherent Centralization of Proof-of-Work Blockchains</a></li>
                <li><a href="#">Peercoin & Proof-Of-Stake Consensus</a></li>
              </ul>
              <a href="#" className="btn btn--green">Peercoin University</a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <h2 className="title title--green">Exchanges</h2>
          <p className="description">DISCLAIMER: This list is provided for informational purposes only. Services listed here have not been evaluated or endorsed by the Peercoin Foundation. Exercise discretion when using third-party platforms and services.</p>
          <div className="blocks-list">
            <a href="https://bittrex.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Bittrex</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/bittrex_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://www.coinegg.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">CoinEgg</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/coinegg_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://hitbtc.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">HitBTC</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/hitbtc_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://www.livecoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Livecoin</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/livecoin_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://www.therocktrading.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">The Rock Trading</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/therocktrading_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://www.litebit.eu/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">LiteBit</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/litebit_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://bx.in.th/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BX Thailand</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/bxthailand_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://bittylicious.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Bittylicious</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/bittylicious_green.png" />
              <div className="blocks-list__block__type">Service</div>
            </a>
            <a href="https://coinswitch.co/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Coin Switch</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/coinswitch_green.png" />
              <div className="blocks-list__block__type">Service</div>
            </a>
            <a href="https://freiexchange.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">FreiExchange</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/freiexchange_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://novaexchange.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Nova Exchange</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/novaexchange_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://flyp.me/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Flyp.me</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/flypme_green.png" />
              <div className="blocks-list__block__type">Service</div>
            </a>
            <a href="https://i2trading.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">i2 Trading</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/i2trading_green.png" />
              <div className="blocks-list__block__type">Exchange</div>
            </a>
            <a href="https://shapeshift.io/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Shapeshift</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/shapeshift_green.png" />
              <div className="blocks-list__block__type">Service</div>
            </a>
            <a href="https://www.bcbitcoin.co.uk/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BCBitcoin</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/bcbitcoin_green.png" />
              <div className="blocks-list__block__type">Service</div>
            </a>
            <a href="https://coinpaprika.com/coin/ppc-peercoin/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">More Exchanges</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/coinpaprika_green.png" />
              <div className="blocks-list__block__type">Market Information</div>
            </a>
            <a href="https://coinmarketcap.com/currencies/peercoin/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">More Exchanges</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/coinmarketcap_green.png" />
              <div className="blocks-list__block__type">Market Information</div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="main">
        <div className="container">
          <h2 className="title title--green">Block Explorers</h2>
          <h3 className="title title--green">Mainnet</h3>
          <div className="blocks-list">
            <a href="https://bitinfocharts.com/peercoin/explorer/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BitInfoCharts</h4>
              <img className="blocks-list__block__img" src="/img/explorers/bitinfocharts_green.png" />
            </a>
            <a href="https://chainz.cryptoid.info/ppc/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Chainz.CryptoID</h4>
              <img className="blocks-list__block__img" src="/img/explorers/cryptoid_green.png" />
            </a>
            <a href="https://www.coinexplorer.net/PPC" className="blocks-list__block">
              <h4 className="blocks-list__block__title">CoinExplorer</h4>
              <img className="blocks-list__block__img" src="/img/explorers/coinexplorer_green.png" />
            </a>
            <a href="https://explorer.peercoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">PeerExplorer</h4>
              <img className="blocks-list__block__img" src="/img/explorers/peercoin_green.png" />
            </a>
          </div>
          <h3 className="title title--green">Testnet</h3>
          <div className="blocks-list">
            <a href="https://testnet-explorer.peercoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">PeerExplorer</h4>
              <img className="blocks-list__block__img" src="/img/explorers/peercoin_green.png" />
            </a>
            <a href="https://chainz.cryptoid.info/ppc-test/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Chainz.CryptoID</h4>
              <img className="blocks-list__block__img" src="/img/explorers/cryptoid_green.png" />
            </a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <h2 className="title title--green">Tools</h2>
          <div className="blocks-list">
            <a href="https://www.peercoinexplorer.net/inflation/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Inflation</h4>
              <img className="blocks-list__block__img" src="/img/icons/mint_green.png" />
            </a>
            <a href="https://www.peercoinexplorer.net/mempool/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Mempool</h4>
              <img className="blocks-list__block__img" src="/img/icons/mint_green.png" />
            </a>
            <a href="https://www.coinexplorer.net/PPC" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Energy Statistics</h4>
              <img className="blocks-list__block__img" src="/img/icons/mint_green.png" />
            </a>
            <a href="https://faucet.peercoinexplorer.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Testnet Faucet</h4>
              <img className="blocks-list__block__img" src="/img/icons/mint_green.png" />
            </a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <h2 className="title title--green">Community</h2>
          <div className="blocks-list">
            <a href="https://talk.peercoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Forum</h4>
              <img className="blocks-list__block__img" src="/img/icons/forum_green.png" />
            </a>
            <a href="https://www.reddit.com/r/peercoin" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Reddit</h4>
              <img className="blocks-list__block__img" src="/img/icons/reddit_green.png" />
            </a>
            <a href="https://discord.gg/XPxfwtG" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Discord</h4>
              <img className="blocks-list__block__img" src="/img/icons/discord_green.png" />
            </a>
            <a href="https://t.me/peercoin" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Telegram</h4>
              <img className="blocks-list__block__img" src="/img/icons/telegram_green.png" />
            </a>
            <a href="https://twitter.com/PeercoinPPC" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Twitter</h4>
              <img className="blocks-list__block__img" src="/img/icons/twitter_green.png" />
            </a>
            <a href="https://www.facebook.com/Peercoin/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Facebook</h4>
              <img className="blocks-list__block__img" src="/img/icons/facebook_green.png" />
            </a>
            <a href="https://www.youtube.com/user/PeerCoin" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Youtube</h4>
              <img className="blocks-list__block__img" src="/img/icons/youtube_green.png" />
            </a>
            <a href="https://bitcointalk.org/index.php?topic=101820.0" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BitcoinTalk</h4>
              <img className="blocks-list__block__img" src="/img/icons/bitcoinchat_green.png" />
            </a>
            <a href="https://github.com/peercoin/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">GitHub</h4>
              <img className="blocks-list__block__img" src="/img/icons/github_green.png" />
            </a>
            <a href="https://medium.com/peercoin" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Blog</h4>
              <img className="blocks-list__block__img" src="/img/icons/blog_green.png" />
            </a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <h2 className="title title--green">Whitepaper</h2>
          <div className="blocks-list">
            <a href="/whitepapers/peercoin-paper.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">English</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" />
            </a>
            <a href="/whitepapers/peercoin-paper-cn.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Chinese/中文</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" />
            </a>
            <a href="/whitepapers/peercoin-paper-es.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Spanish/Español</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" />
            </a>
            <a href="/whitepapers/peercoin-paper-nl.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Dutch/Nederlands</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" />
            </a>
            <a href="/whitepapers/peercoin-paper-fr.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">French/Français</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" />
            </a>
            <a href="/whitepapers/peercoin-paper-de.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">German/Deutsch</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" />
            </a>
            <a href="/whitepapers/peercoin-paper-jp.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Japanese/日本語</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" />
            </a>
            <a href="/whitepapers/peercoin-paper-kr.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Korean/한국말</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" />
            </a>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <h2 className="title title--green">Graphics</h2>
          <p className="subtitle">Looking for more graphics? An up-to-date collection of logos and wallpapers can be found on the <a href="">Peercoin GitHub</a>.</p>
          <h3 className="title">Vertical Logo</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenicon-blacktext-transparent.png" />
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-vertical-greenicon-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-vertical-greenicon-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-vertical-greenicon-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenicon-greentext-transparent.png" />
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-vertical-greenicon-greentext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-vertical-greenicon-greentext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-vertical-greenicon-greentext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenicon-whitetext-transparent.png" />
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-WhiteText/peercoin-vertical-greenicon-whitetext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-WhiteText/peercoin-vertical-greenicon-whitetext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-WhiteText/peercoin-vertical-greenicon-whitetext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenicon-graytext-transparent.png" />
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-vertical-greenicon-graytext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-vertical-greenicon-graytext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-vertical-greenicon-graytext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenleaf-blacktext-transparent.png" />
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-vertical-greenleaf-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-vertical-greenleaf-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-vertical-greenleaf-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenleaf-graytext-transparent.png" />
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-vertical-greenleaf-graytext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-vertical-greenleaf-graytext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-vertical-greenleaf-graytext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenleaf-greentext-transparent.png" />
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GreenText/peercoin-vertical-greenleaf-greentext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GreenText/peercoin-vertical-greenleaf-greentext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GreenText/peercoin-vertical-greenleaf-greentext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenleaf-whitetext-transparent.png" />
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-vertical-greenleaf-whitetext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-vertical-greenleaf-whitetext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-vertical-greenleaf-whitetext-transparent.eps"><span>EPS</span></a>
            </div>
          </div>
          <h3 className="title">Horizontal Logo</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-blackleaf-blacktext-transparent.png" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/BlackLeaf-BlackText/peercoin-horizontal-blackleaf-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/BlackLeaf-BlackText/peercoin-horizontal-blackleaf-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/BlackLeaf-BlackText/peercoin-horizontal-blackleaf-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenleaf-blacktext-transparent.png" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-horizontal-greenleaf-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-horizontal-greenleaf-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-horizontal-greenleaf-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenleaf-graytext-transparent.png" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-horizontal-greenleaf-graytext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-horizontal-greenleaf-graytext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-horizontal-greenleaf-graytext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenleaf-whitetext-transparent.png" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-horizontal-greenleaf-whitetext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-horizontal-greenleaf-whitetext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-horizontal-greenleaf-whitetext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-whiteleaf-whitetext-transparent.png" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/WhiteLeaf-WhiteText/peercoin-horizontal-whiteleaf-whitetext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/WhiteLeaf-WhiteText/peercoin-horizontal-whiteleaf-whitetext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/WhiteLeaf-WhiteText/peercoin-horizontal-whiteleaf-whitetext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenicon-blacktext-transparent.png" />
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-horizontal-greenicon-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-horizontal-greenicon-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-horizontal-greenicon-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenicon-greentext-transparent.png" />
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-horizontal-greenicon-greentext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-horizontal-greenicon-greentext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-horizontal-greenicon-greentext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenicon-graytext-transparent.png" />
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-horizontal-greenicon-graytext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-horizontal-greenicon-graytext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-horizontal-greenicon-graytext-transparent.eps"><span>EPS</span></a>
            </div>
          </div>
          <h3 className="title">Icon Only</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-icon-green-transparent.png" />
              <a href="/img/logos/icononly/insidecircle/Transparent/GreenIcon/peercoin-icon-green-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/icononly/insidecircle/Transparent/GreenIcon/peercoin-icon-green-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/icononly/insidecircle/Transparent/GreenIcon/peercoin-icon-green-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-leaf-green-transparent.png" />
              <a href="/img/logos/icononly/outsidecircle/Transparent/GreenLeaf/peercoin-leaf-green-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/GreenLeaf/peercoin-leaf-green-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/GreenLeaf/peercoin-leaf-green-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-leaf-transparent-black.png" />
              <a href="/img/logos/icononly/outsidecircle/Transparent/BlackLeaf/peercoin-leaf-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/BlackLeaf/peercoin-leaf-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/BlackLeaf/peercoin-leaf-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-leaf-white-transparent.png" />
              <a href="/img/logos/icononly/outsidecircle/Transparent/WhiteLeaf/peercoin-leaf-white-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/WhiteLeaf/peercoin-leaf-white-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/WhiteLeaf/peercoin-leaf-white-transparent.eps"><span>EPS</span></a>
            </div>
          </div>
          <h3 className="title">Text Only</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-text-black-transparent.png" />
              <a href="/img/logos/textonly/Transparent/BlackText/peercoin-text-black-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/textonly/Transparent/BlackText/peercoin-text-black-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/textonly/Transparent/BlackText/peercoin-text-black-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-text-gray-transparent.png" />
              <a href="/img/logos/textonly/Transparent/GrayText/peercoin-text-gray-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/textonly/Transparent/GrayText/peercoin-text-gray-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/textonly/Transparent/GrayText/peercoin-text-gray-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-text-green-transparent.png" />
              <a href="/img/logos/textonly/Transparent/GreenText/peercoin-text-green-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/textonly/Transparent/GreenText/peercoin-text-green-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/textonly/Transparent/GreenText/peercoin-text-green-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-text-white-transparent.png" />
              <a href="/img/logos/textonly/Transparent/WhiteText/peercoin-text-white-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/textonly/Transparent/WhiteText/peercoin-text-white-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/textonly/Transparent/WhiteText/peercoin-text-white-transparent.eps"><span>EPS</span></a>
            </div>
          </div>
          <h3 className="title">Favicons</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/favicon256.png" />
              <a href="/img/logos/favicons/Leaf/favicon16.png"><span>16px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon32.png"><span>32px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon48.png"><span>48px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon64.png"><span>64px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon96.png"><span>96px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon128.png"><span>128px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon256.png"><span>256px</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/circlefavicon256.png" />
              <a href="/img/logos/favicons/Icon/favicon16.png"><span>16px</span></a>
              <a href="/img/logos/favicons/Icon/favicon32.png"><span>32px</span></a>
              <a href="/img/logos/favicons/Icon/favicon48.png"><span>48px</span></a>
              <a href="/img/logos/favicons/Icon/favicon64.png"><span>64px</span></a>
              <a href="/img/logos/favicons/Icon/favicon96.png"><span>96px</span></a>
              <a href="/img/logos/favicons/Icon/favicon128.png"><span>128px</span></a>
              <a href="/img/logos/favicons/Icon/favicon256.png"><span>256px</span></a>
            </div>
          </div>
          <p className="subtitle">
            ZIP folder for all graphics is available <a href="https://peercoin.net/assets/Peercoin%202018%20Graphics.zip">here</a>.
          </p>
          <h2 className="title title--centere title--green">Brand Identity</h2>
          <p className="subtitle subtitle--left">
            <b>Peercoin Color Codes & Fonts:</b>
          </p>
          <p className="subtitle subtitle--left">
          Please use these color codes on your Peercoin related websites whenever possible. This will help us keep the Peercoin ecosystem and its branding and visuals consistent.
          </p>
          <p className="subtitle subtitle--left">
            <code>Green:</code><br />
            <code>#3cb054</code><br />
            <code>RBG: 24, 69, 33</code><br />
            <code>CMYK: 66, 0, 52, 31</code>
          </p>
          <p className="subtitle subtitle--left">
            The Peercoin text logo uses the following font:<br />
            Font: FF Mark<br />
            Type: Mark-Medium<br /><br />
            Website: <a href="http://www.ffmark.com/">http://www.ffmark.com/</a>
          </p>
          <p className="subtitle subtitle--left">
            The Peercoin website and wallets use the Roboto font for its content. 
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
