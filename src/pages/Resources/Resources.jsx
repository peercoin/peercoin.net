import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import renderHTML from 'react-render-html';
import './Resources.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

function Resources() {
  const { t } = useTranslation();

  return (
    <div className="ResourcesPage">
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t('resourcesPage.title')}</h1>
        <p className="hero__description">
        {t('resourcesPage.description')}
        </p>
        <div className="hero__actions">
          <a href="#exchanges" className="hero__actions__action hero__actions__action--white">{t('resourcesPage.actions.action1')}</a>
          <a href="#blockexplorers" className="hero__actions__action hero__actions__action--white">{t('resourcesPage.actions.action2')}</a>
          <a href="#communities" className="hero__actions__action hero__actions__action--white">{t('resourcesPage.actions.action3')}</a>
          <a href="#whitepaper" className="hero__actions__action hero__actions__action--white">{t('resourcesPage.actions.action4')}</a>
          <a href="#graphics" className="hero__actions__action hero__actions__action--white">{t('resourcesPage.actions.action5')}</a>
        </div>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title title--green title--left">{t('resourcesPage.contributeTitle')}</h2>
              <p>{t('resourcesPage.contributeText')}</p>
              <a href="https://github.com/peercoin/" className="btn btn--green">{t('resourcesPage.contributeBtn')}</a>
            </div>
            <div className="col">
              <h2 className="title title--green title--left">{t('resourcesPage.documentationTitle')}</h2>
              <p>{t('resourcesPage.documentationText')}</p>
              <a href="https://docs.peercoin.net/" className="btn btn--green">{t('resourcesPage.documentationBtn')}</a>
            </div>
          </div>
          <div className="row">
            <div className="col" id="mining">
              <h2 className="title title--green title--left">{t('resourcesPage.miningTitle')}</h2>
              <p>{t('resourcesPage.miningText1')}</p>
              <p>{t('resourcesPage.miningText2')}</p>
              <ul>
                <li><a href="http://bfgminer.org/">BFGMiner</a></li>
                <li><a href="https://github.com/ckolivas/cgminer">CGMiner</a></li>
                <li><a href="https://easyminer.net/">EasyMiner</a></li>
              </ul>
              <a href="https://docs.peercoin.net/#/mining" className="btn btn--green">{t('resourcesPage.miningBtn1')}</a>
              <a href="https://www.coinwarz.com/calculators/peercoin-mining-calculator" className="btn btn--green">{t('resourcesPage.miningBtn2')}</a>
            </div>
            <div className="col" id="university">
              <h2 className="title title--green title--left">{t('resourcesPage.universityTitle')}</h2>
              <p>{t('resourcesPage.universityText1')}</p>
              <p>{t('resourcesPage.universityText2')}</p>
              <ul>
                <li><a href="https://university.peercoin.net/#/2-what-is-a-blockchain-">{t('resourcesPage.universityLink1')}</a></li>
                <li><a href="https://university.peercoin.net/#/6-inherent-centralization-of-proof-of-work-blockchains">{t('resourcesPage.universityLink2')}</a></li>
                <li><a href="https://university.peercoin.net/#/9-peercoin-proof-of-stake-consensus">{t('resourcesPage.universityLink3')}</a></li>
              </ul>
              <a href="https://university.peercoin.net/" className="btn btn--green">{t('resourcesPage.universityBtn')}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="main" id="exchanges">
        <div className="container">
          <h2 className="title title--green">{t('resourcesPage.exchangesTitle')}</h2>
          <p className="description">{t('resourcesPage.exchangesText')}</p>
          <div className="blocks-list">
            <a href="https://bittrex.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Bittrex</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/bittrex_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://www.coinegg.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">CoinEgg</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/coinegg_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://hitbtc.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">HitBTC</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/hitbtc_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://www.livecoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Livecoin</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/livecoin_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://www.therocktrading.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">The Rock Trading</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/therocktrading_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://www.litebit.eu/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">LiteBit</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/litebit_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://bx.in.th/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BX Thailand</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/bxthailand_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://bittylicious.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Bittylicious</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/bittylicious_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType2')}</div>
            </a>
            <a href="https://coinswitch.co/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Coin Switch</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/coinswitch_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType2')}</div>
            </a>
            <a href="https://freiexchange.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">FreiExchange</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/freiexchange_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://novaexchange.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Nova Exchange</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/novaexchange_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://flyp.me/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Flyp.me</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/flypme_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType2')}</div>
            </a>
            <a href="https://i2trading.com/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">i2 Trading</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/i2trading_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType1')}</div>
            </a>
            <a href="https://shapeshift.io/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Shapeshift</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/shapeshift_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType2')}</div>
            </a>
            <a href="https://www.bcbitcoin.co.uk/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BCBitcoin</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/bcbitcoin_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType2')}</div>
            </a>
            <a href="https://coinpaprika.com/coin/ppc-peercoin/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">More Exchanges</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/coinpaprika_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType3')}</div>
            </a>
            <a href="https://coinmarketcap.com/currencies/peercoin/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">More Exchanges</h4>
              <img className="blocks-list__block__img" src="/img/exchanges/coinmarketcap_green.png" alt="" />
              <div className="blocks-list__block__type">{t('resourcesPage.exchangesType3')}</div>
            </a>
          </div>
        </div>
      </div>
      
      <div className="main" id="blockexplorers">
        <div className="container">
          <h2 className="title title--green">{t('resourcesPage.explorersTitle')}</h2>
          <h3 className="title title--green">{t('resourcesPage.explorersMainnet')}</h3>
          <div className="blocks-list">
            <a href="https://bitinfocharts.com/peercoin/explorer/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BitInfoCharts</h4>
              <img className="blocks-list__block__img" src="/img/explorers/bitinfocharts_green.png" alt="" />
            </a>
            <a href="https://chainz.cryptoid.info/ppc/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Chainz.CryptoID</h4>
              <img className="blocks-list__block__img" src="/img/explorers/cryptoid_green.png" alt="" />
            </a>
            <a href="https://www.coinexplorer.net/PPC" className="blocks-list__block">
              <h4 className="blocks-list__block__title">CoinExplorer</h4>
              <img className="blocks-list__block__img" src="/img/explorers/coinexplorer_green.png" alt="" />
            </a>
            <a href="https://explorer.peercoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">PeerExplorer</h4>
              <img className="blocks-list__block__img" src="/img/explorers/peercoin_green.png" alt="" />
            </a>
          </div>
          <h3 className="title title--green">{t('resourcesPage.explorersTestnet')}</h3>
          <div className="blocks-list">
            <a href="https://testnet-explorer.peercoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">PeerExplorer</h4>
              <img className="blocks-list__block__img" src="/img/explorers/peercoin_green.png" alt="" />
            </a>
            <a href="https://chainz.cryptoid.info/ppc-test/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Chainz.CryptoID</h4>
              <img className="blocks-list__block__img" src="/img/explorers/cryptoid_green.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="main" id="tools">
        <div className="container">
          <h2 className="title title--green">{t('resourcesPage.toolsTitle')}</h2>
          <div className="blocks-list">
            <a href="https://www.peercoinexplorer.net/inflation/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.toolsInflation')}</h4>
              <img className="blocks-list__block__img" src="/img/icons/mint_green.png" alt="" />
            </a>
            <a href="https://www.peercoinexplorer.net/mempool/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.toolsMempool')}</h4>
              <img className="blocks-list__block__img" src="/img/icons/mint_green.png" alt="" />
            </a>
            <a href="https://www.coinexplorer.net/PPC" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.toolsEnergyStatistics')}</h4>
              <img className="blocks-list__block__img" src="/img/icons/mint_green.png" alt="" />
            </a>
            <a href="https://faucet.peercoinexplorer.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.toolsTestnetFaucet')}</h4>
              <img className="blocks-list__block__img" src="/img/icons/mint_green.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="main" id="communities">
        <div className="container">
          <h2 className="title title--green">{t('resourcesPage.communityTitle')}</h2>
          <div className="blocks-list">
            <a href="https://talk.peercoin.net/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Forum</h4>
              <img className="blocks-list__block__img" src="/img/icons/forum_green.png" alt="" />
            </a>
            <a href="https://www.reddit.com/r/peercoin" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Reddit</h4>
              <img className="blocks-list__block__img" src="/img/icons/reddit_green.png" alt="" />
            </a>
            <a href="https://discord.gg/XPxfwtG" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Discord</h4>
              <img className="blocks-list__block__img" src="/img/icons/discord_green.png" alt="" />
            </a>
            <a href="https://t.me/peercoin" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Telegram</h4>
              <img className="blocks-list__block__img" src="/img/icons/telegram_green.png" alt="" />
            </a>
            <a href="https://twitter.com/PeercoinPPC" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Twitter</h4>
              <img className="blocks-list__block__img" src="/img/icons/twitter_green.png" alt="" />
            </a>
            <a href="https://www.facebook.com/Peercoin/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Facebook</h4>
              <img className="blocks-list__block__img" src="/img/icons/facebook_green.png" alt="" />
            </a>
            <a href="https://www.youtube.com/user/PeerCoin" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Youtube</h4>
              <img className="blocks-list__block__img" src="/img/icons/youtube_green.png" alt="" />
            </a>
            <a href="https://bitcointalk.org/index.php?topic=101820.0" className="blocks-list__block">
              <h4 className="blocks-list__block__title">BitcoinTalk</h4>
              <img className="blocks-list__block__img" src="/img/icons/bitcoinchat_green.png" alt="" />
            </a>
            <a href="https://github.com/peercoin/" className="blocks-list__block">
              <h4 className="blocks-list__block__title">GitHub</h4>
              <img className="blocks-list__block__img" src="/img/icons/github_green.png" alt="" />
            </a>
            <a href="https://medium.com/peercoin" className="blocks-list__block">
              <h4 className="blocks-list__block__title">Blog</h4>
              <img className="blocks-list__block__img" src="/img/icons/blog_green.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="main" id="whitepaper">
        <div className="container">
          <h2 className="title title--green">{t('resourcesPage.whitepaperTitle')}</h2>
          <div className="blocks-list">
            <a href="/whitepapers/peercoin-paper.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.whitepaperEnglish')}</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" alt="" />
            </a>
            <a href="/whitepapers/peercoin-paper-cn.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.whitepaperChinese')}/中文</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" alt="" />
            </a>
            <a href="/whitepapers/peercoin-paper-es.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.whitepaperSpanish')}/Español</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" alt="" />
            </a>
            <a href="/whitepapers/peercoin-paper-nl.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.whitepaperDutch')}/Nederlands</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" alt="" />
            </a>
            <a href="/whitepapers/peercoin-paper-fr.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.whitepaperFrench')}/Français</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" alt="" />
            </a>
            <a href="/whitepapers/peercoin-paper-de.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.whitepaperGerman')}/Deutsch</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" alt="" />
            </a>
            <a href="/whitepapers/peercoin-paper-jp.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.whitepaperJapanese')}/日本語</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" alt="" />
            </a>
            <a href="/whitepapers/peercoin-paper-kr.pdf" className="blocks-list__block">
              <h4 className="blocks-list__block__title">{t('resourcesPage.whitepaperKorean')}/한국말</h4>
              <img className="blocks-list__block__img" src="/img/icons/whitepaper_green.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="main" id="graphics">
        <div className="container">
          <h2 className="title title--green">{t('resourcesPage.graphicsTitle')}</h2>
          <p className="subtitle">{renderHTML(t('resourcesPage.graphicsText'))}</p>
          <h3 className="title">{t('resourcesPage.graphicsVertical')}</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenicon-blacktext-transparent.png" alt="" />
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-vertical-greenicon-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-vertical-greenicon-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-vertical-greenicon-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenicon-greentext-transparent.png" alt="" />
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-vertical-greenicon-greentext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-vertical-greenicon-greentext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-vertical-greenicon-greentext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenicon-whitetext-transparent.png" alt="" />
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-WhiteText/peercoin-vertical-greenicon-whitetext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-WhiteText/peercoin-vertical-greenicon-whitetext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-WhiteText/peercoin-vertical-greenicon-whitetext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenicon-graytext-transparent.png" alt="" />
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-vertical-greenicon-graytext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-vertical-greenicon-graytext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-vertical-greenicon-graytext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenleaf-blacktext-transparent.png" alt="" />
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-vertical-greenleaf-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-vertical-greenleaf-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-vertical-greenleaf-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenleaf-graytext-transparent.png" alt="" />
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-vertical-greenleaf-graytext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-vertical-greenleaf-graytext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-vertical-greenleaf-graytext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenleaf-greentext-transparent.png" alt="" />
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GreenText/peercoin-vertical-greenleaf-greentext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GreenText/peercoin-vertical-greenleaf-greentext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-GreenText/peercoin-vertical-greenleaf-greentext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-vertical-greenleaf-whitetext-transparent.png" alt="" />
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-vertical-greenleaf-whitetext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-vertical-greenleaf-whitetext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/verticalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-vertical-greenleaf-whitetext-transparent.eps"><span>EPS</span></a>
            </div>
          </div>
          <h3 className="title">{t('resourcesPage.graphicsHorizontal')}</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-blackleaf-blacktext-transparent.png" alt="" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/BlackLeaf-BlackText/peercoin-horizontal-blackleaf-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/BlackLeaf-BlackText/peercoin-horizontal-blackleaf-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/BlackLeaf-BlackText/peercoin-horizontal-blackleaf-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenleaf-blacktext-transparent.png" alt="" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-horizontal-greenleaf-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-horizontal-greenleaf-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-BlackText/peercoin-horizontal-greenleaf-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenleaf-graytext-transparent.png" alt="" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-horizontal-greenleaf-graytext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-horizontal-greenleaf-graytext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-GrayText/peercoin-horizontal-greenleaf-graytext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenleaf-whitetext-transparent.png" alt="" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-horizontal-greenleaf-whitetext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-horizontal-greenleaf-whitetext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/GreenLeaf-WhiteText/peercoin-horizontal-greenleaf-whitetext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-whiteleaf-whitetext-transparent.png" alt="" />
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/WhiteLeaf-WhiteText/peercoin-horizontal-whiteleaf-whitetext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/WhiteLeaf-WhiteText/peercoin-horizontal-whiteleaf-whitetext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/outsidecircle/Transparent/WhiteLeaf-WhiteText/peercoin-horizontal-whiteleaf-whitetext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenicon-blacktext-transparent.png" alt="" />
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-horizontal-greenicon-blacktext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-horizontal-greenicon-blacktext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-BlackText/peercoin-horizontal-greenicon-blacktext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenicon-greentext-transparent.png" alt="" />
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-horizontal-greenicon-greentext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-horizontal-greenicon-greentext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GreenText/peercoin-horizontal-greenicon-greentext-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-horizontal-greenicon-graytext-transparent.png" alt="" />
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-horizontal-greenicon-graytext-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-horizontal-greenicon-graytext-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/horizontalset/insidecircle/Transparent/GreenIcon-GrayText/peercoin-horizontal-greenicon-graytext-transparent.eps"><span>EPS</span></a>
            </div>
          </div>
          <h3 className="title">{t('resourcesPage.graphicsIconOnly')}</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-icon-green-transparent.png" alt="" />
              <a href="/img/logos/icononly/insidecircle/Transparent/GreenIcon/peercoin-icon-green-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/icononly/insidecircle/Transparent/GreenIcon/peercoin-icon-green-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/icononly/insidecircle/Transparent/GreenIcon/peercoin-icon-green-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-leaf-green-transparent.png" alt="" />
              <a href="/img/logos/icononly/outsidecircle/Transparent/GreenLeaf/peercoin-leaf-green-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/GreenLeaf/peercoin-leaf-green-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/GreenLeaf/peercoin-leaf-green-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-leaf-transparent-black.png" alt="" />
              <a href="/img/logos/icononly/outsidecircle/Transparent/BlackLeaf/peercoin-leaf-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/BlackLeaf/peercoin-leaf-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/BlackLeaf/peercoin-leaf-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-leaf-white-transparent.png" alt="" />
              <a href="/img/logos/icononly/outsidecircle/Transparent/WhiteLeaf/peercoin-leaf-white-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/WhiteLeaf/peercoin-leaf-white-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/icononly/outsidecircle/Transparent/WhiteLeaf/peercoin-leaf-white-transparent.eps"><span>EPS</span></a>
            </div>
          </div>
          <h3 className="title">{t('resourcesPage.graphicsTextOnly')}</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-text-black-transparent.png" alt="" />
              <a href="/img/logos/textonly/Transparent/BlackText/peercoin-text-black-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/textonly/Transparent/BlackText/peercoin-text-black-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/textonly/Transparent/BlackText/peercoin-text-black-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-text-gray-transparent.png" alt="" />
              <a href="/img/logos/textonly/Transparent/GrayText/peercoin-text-gray-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/textonly/Transparent/GrayText/peercoin-text-gray-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/textonly/Transparent/GrayText/peercoin-text-gray-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-text-green-transparent.png" alt="" />
              <a href="/img/logos/textonly/Transparent/GreenText/peercoin-text-green-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/textonly/Transparent/GreenText/peercoin-text-green-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/textonly/Transparent/GreenText/peercoin-text-green-transparent.eps"><span>EPS</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/peercoin-text-white-transparent.png" alt="" />
              <a href="/img/logos/textonly/Transparent/WhiteText/peercoin-text-white-transparent@6x.png"><span>PNG</span></a>
              <a href="/img/logos/textonly/Transparent/WhiteText/peercoin-text-white-transparent.svg"><span>SVG</span></a>
              <a href="/img/logos/textonly/Transparent/WhiteText/peercoin-text-white-transparent.eps"><span>EPS</span></a>
            </div>
          </div>
          <h3 className="title">{t('resourcesPage.graphicsFavicons')}</h3>
          <div className="blocks-list blocks-list--grey">
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/favicon256.png" alt="" />
              <a href="/img/logos/favicons/Leaf/favicon16.png"><span>16px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon32.png"><span>32px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon48.png"><span>48px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon64.png"><span>64px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon96.png"><span>96px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon128.png"><span>128px</span></a>
              <a href="/img/logos/favicons/Leaf/favicon256.png"><span>256px</span></a>
            </div>
            <div className="blocks-list__block">
              <img className="blocks-list__block__img" src="/img/logos/webfixed/circlefavicon256.png" alt="" />
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
            {renderHTML(t('resourcesPage.graphicsZipFolder'))}.
          </p>
          <h2 className="title title--centere title--green">{t('resourcesPage.brandIdentityTitle')}</h2>
          <p className="subtitle subtitle--left">
            <b>{t('resourcesPage.brandIdentityColrosFonts')}</b>
          </p>
          <p className="subtitle subtitle--left">
          {t('resourcesPage.brandIdentityDisclaimer')}
          </p>
          <p className="subtitle subtitle--left">
            <code>{t('resourcesPage.brandIdentityGreen')}:</code><br />
            <code>#3cb054</code><br />
            <code>RBG: 24, 69, 33</code><br />
            <code>CMYK: 66, 0, 52, 31</code>
          </p>
          <p className="subtitle subtitle--left">
            {t('resourcesPage.brandIdentityFont')}:<br />
            {t('resourcesPage.brandIdentityFontFont')}: FF Mark<br />
            {t('resourcesPage.brandIdentityFontType')}: Mark-Medium<br /><br />
            {t('resourcesPage.brandIdentityFontWebsite')}: <a href="http://www.ffmark.com/">http://www.ffmark.com/</a>
          </p>
          <p className="subtitle subtitle--left">
            {t('resourcesPage.brandIdentityFontRoboto')}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Resources />
    </Suspense>
  );
}

export default HoF;