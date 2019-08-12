import React, {useEffect, useState} from 'react';
import './LatestNews.scss';



function LatestNews() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const posts = (await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/peercoin').then(res => res.json()))
        .items
        .filter(post => post.categories.length > 0)
        .map(post => ({ img: post.thumbnail, title: post.title, link: post.link }))
        .slice(0, 3);
      console.log(posts);
      await setPosts(posts);
    }

    getData();
  }, []);

  return (
    <div className="latest-news">
      {posts.length > 0 && posts.map(post => (
        <a href={post.link} className="post" key={Math.random()} target="_blank" rel="noopener noreferrer">
          <img src={post.img} alt={post.title} className="post__img" />
          <h3 className="post__title">{post.title}</h3>
          <span href={post.link} className="post__button">Read more</span>
        </a>
      ))}
    </div>
  );
}

export default LatestNews;
