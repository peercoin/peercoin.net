import React, { useEffect, useState, Suspense } from "react";
import "./LatestNews.scss";
import Loader from "../Loader/Loader";
import { formatTime } from "../../helpers/Time";
import { convertRSSToJson } from "../../helpers/ConvertRSSToJson";

function LatestNews() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const peercoinPosts = await convertRSSToJson(
        "https://www.peercoin.net/blog/rss/"
      );

      const posts = peercoinPosts
        .sort((a, b) => new Date(b.published) - new Date(a.published))
        .map((post) => ({
          published: post.published,
          img: post.img,
          title: post.title,
          link: post.link,
          categories: post.categories,
        }))
        .slice(0, 3);
      console.log(posts[0].img);
      setPosts(posts);
    }

    getData();
  }, []);

  return (
    <div className="latest-news">
      {posts.length > 0 &&
        posts.map((post) => (
          <div className="post" key={post.title}>
            <a
              href={post.link}
              key={Math.random()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={post.img} alt={post.title} className="post__img" />
              <h3 className="post__title">{post.title}</h3>
            </a>

            <div title={post.published} className="post__published">
              Published {formatTime(post.published)}
            </div>
          </div>
        ))}
    </div>
  );
}

function HoF() {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <LatestNews />
    </Suspense>
  );
}

export default HoF;
