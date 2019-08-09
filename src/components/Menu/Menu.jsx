import React from 'react';
import './Menu.scss';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__main">
        <li>Home</li>
        <li>
          Learn
          <img src="/img/icon-menu-arrow-down.svg" alt=""/>
          <ul className="menu__main__submenu">      
            <li><a href="https://peercoin.github.io/PeercoinUniversity/" class="submenu">Peercoin University</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/2-what-is-a-blockchain-" class="submenu">What is a Blockchain?</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/6-centralization-of-bitcoin" class="submenu">Inherent Centralization of Proof-of-Work Blockchains</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/9-peercoin-proof-of-stake-consensus" class="submenu">Peercoin &amp; Proof-of-Stake Consensus</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/10-first-efficient-sustainable-blockchain" class="submenu">Efficient &amp; Sustainable Security</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/11-economics-of-peercoin" class="submenu">Economics of Peercoin</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/12-scalability-of-peercoin-" class="submenu">Scalability of Peercoin</a></li>
            <li><a href="https://medium.com/peercoin/deflation-and-cryptocurrencies-the-long-term-ramifications-of-fixed-supply-currencies-c192f44dddc1" class="submenu">Deflation and Cryptocurrencies</a></li>
            <li><a href="https://medium.com/peercoin/peercoins-hybrid-chain-solution-to-proof-of-work-global-scaling-and-environmental-impact-c36757e89d6e" class="submenu">Peercoin's Hybrid Chain Solution</a></li>
            <li><a href="https://medium.com/peercoin/the-rich-get-richer-concept-in-proof-of-stake-systems-82c5ceeff326" class="submenu">"Rich get Richer" Fallacy</a></li>
            <li><a href="https://docs.peercoin.net/#/frequently-asked-questions" class="submenu">Frequently Asked Questions</a></li>
          </ul>
        </li>
        <li>Get Started</li>
        <li>
          Resources
          <img src="/img/icon-menu-arrow-down.svg" alt=""/>
          <ul className="menu__main__submenu">
            <li><a href="https://docs.peercoin.net/" class="submenu"><img src="/img/icons/docs_green.png" alt="" />Documentation</a></li>
            <li><a href="/resources#mining" class="submenu"><img src="/img/icons/pickaxe_green.png" alt="" />Mining</a></li>
            <li><a href="/resources#university" class="submenu"><img src="/img/icons/graduationcap.png" alt="" />Peercoin University</a></li>
            <li><a href="/resources#exchanges" class="submenu"><img src="/img/icons/exchange_green.png" alt="" />Exchanges</a></li>
            <li><a href="/resources#blockexplorers" class="submenu"><img src="/img/icons/block_green.png" alt="" />Block Explorers</a></li>
            <li><a href="/resources#whitepaper" class="submenu"><img src="/img/icons/whitepaper_green.png" alt="" />Whitepaper</a></li>
            <li><a href="/resources#graphics" class="submenu"><img src="/img/icons/graphics_green.png" alt="" />Graphics</a></li>
          </ul>
        </li>
        <li>
          Project
          <img src="/img/icon-menu-arrow-down.svg" alt=""/>
          <ul className="menu__main__submenu">
            <li><a href="https://github.com/peercoin/" class="submenu"><img src="/img/icons/github_green.png" alt="" />GitHub</a></li>
            <li><a href="projects.html" class="submenu"><img src="/img/icons/projects_green.png" alt="" />Projects</a></li>
            <li><a href="https://medium.com/peercoin" class="submenu"><img src="/img/icons/blog_green.png" alt="" />Blog</a></li>
            <li><a href="foundation.html" class="submenu"><img src="/img/icons/foundation_green.png" alt="" />Peercoin Foundation</a></li>
            <li><a href="contactus.html" class="submenu"><img src="/img/icons/contact_green.png" alt="" />Contact Us</a></li>
          </ul>
        </li>
        <li>Wallet</li>
        <li>
          Community
          <img src="/img/icon-menu-arrow-down.svg" alt=""/>
          <ul className="menu__main__submenu">
            <li><a href="https://talk.peercoin.net/" class="submenu"><img src="/img/icons/forum_green.png" alt="" />Forum</a></li>
            <li><a href="https://twitter.com/PeercoinPPC" class="submenu"><img src="/img/icons/twitter_green.png" alt="" />Twitter</a></li>
            <li><a href="https://www.facebook.com/Peercoin/" class="submenu"><img src="/img/icons/facebook_green.png" alt="" />Facebook</a></li>
            <li><a href="https://www.reddit.com/r/peercoin" class="submenu"><img src="/img/icons/reddit_green.png" alt="" />Reddit</a></li>
            <li><a href="https://t.me/peercoin" class="submenu"><img src="/img/icons/telegram_green.png" alt="" />Telegram</a></li>
            <li><a href="https://discord.gg/XPxfwtG" class="submenu"><img src="/img/icons/discord_green.png" alt="" />Discord</a></li>
            <li><a href="https://www.youtube.com/user/PeerCoin" class="submenu"><img src="/img/icons/youtube_green.png" alt="" />Youtube</a></li>
            <li><a href="https://bitcointalk.org/index.php?topic=101820.0" class="submenu"><img src="/img/icons/bitcoinchat_green.png" alt="" />Bitcointalk</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
