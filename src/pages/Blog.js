import React, { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from '../components/Blog/Post';

const renderBlogs = () => {
  const [data, setData] = useState({ blogs: [] });

  useEffect(async () => {
    const result = await axios(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jakubjirak',
    );
    setData(result.data);
  }, []);

  if (data.items) {
    return <article className="blog-post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>Skilled Three - Medium feed</p>
        </div>
      </header>
          {data.items.map((post) => (
            <Post
              data={post}
              key={`${post.title}${Math.random() * 1000}`}
            />
          ))}
    </article>
  }
};

const Blog = () => (<Main
  title="Blog"
  description="Skilled Three - Medium feed"
>
  {renderBlogs()}
</Main>);

export default Blog;


