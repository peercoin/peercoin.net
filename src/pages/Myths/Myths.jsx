import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './Myths.scss';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';


function Contact() {
  const { t } = useTranslation();

  const myths = [
    {
      "title":"Peercoin is Highly Vulnerable to 51% Attack",
      "description":"Given enough coins, it’s very easy to control the blockchain.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg28107#msg28107"
    },
    {
      "title":"Nothing-at-Stake",
      "description":"There is nothing that prevents minters from minting on several chains at once, and since doing so doesn’t cost anything, there is an incentive to do so. Therefore, the network will never reach consensus and there will be a multitude of competing chain forks.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg27787#msg27787"
    },
    {
      "title":"Stake Grinding",
      "description":"Using only a limited amount of coin age, the blockchain history can be re-written by grinding through the probabilities involved in creating the longest blockchain. As long as there is only a little coin age left, it is possible to create one more block. This makes Proof-of-Work arbitrator in Peercoin.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg27789#msg27789"
    },
    {
      "title":"Synchronized Checkpointing",
      "description":"The network is centralized because the synchronized checkpointing mechanism allows Sunny King to control the blockchain history.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg27791#msg27791"
    },
    {
      "title":"History Revision Attack",
      "description":"An attacker can rewrite the blockchain history using old private keys.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg27793#msg27793"
    },
    {
      "title":"Time-Drift Attack",
      "description":"An attacker can manipulate the clock time and generate blocks ahead of time.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg27924#msg27924"
    },
    {
      "title":"Only One Developer",
      "description":"There is only one developer, Sunny King. He is anonymous and if something happens to him, that’s the end of it.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg28086#msg28086"
    },
    {
      "title":"Peercoin was Pre-Mined",
      "description":"Peercoin was pre-mined/insta-mined.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg28089#msg28089"
    },
    {
      "title":"Peercoin is Extremely Inflationary",
      "description":"New coins are created all the time, it will be incredibly inflationary.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg28098#msg28098"
    },
    {
      "title":"Peercoin is Unfair",
      "description":"The coin is designed to make the rich richer and enrich early adopters.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg28100#msg28100"
    },
    {
      "title":"Peercoin is a Scam",
      "description":"Its just a scam coin with no long-term plan.",
      "url":"http://www.peercointalk.org/index.php?topic=2976.msg28105#msg28105"
    }
  ];

  const items = myths.map((item, key) =>
    <div className="blocks-list-myths__block">
      <h4 className="blocks-list-myths__block__title"><b>{item.title }</b></h4>
      <h2 className="blocks-list-myths__block__title">{item.description }</h2>
      <a href={item.url} target="_blank" without rel="noopener noreferrer"  className="btn btn--white" >
        {t('mythsPage.moreInfo')}
      </a>
    </div>
  );


  return (
    <>
      <Menu />
      <div className="hero hero--thin">
        <h1 className="hero__title">{t('mythsPage.title')}</h1>
        <p className="hero__description">
          {t('mythsPage.description')}
        </p>
      </div>

      <div className="main text-sections">
        <div className="container">
          <div className="row">
            <div className="blocks-list-myths myths">
            { items }
          </div>
    
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Contact />
    </Suspense>
  );
}

export default HoF;
