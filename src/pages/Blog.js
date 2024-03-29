import React, { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from '../components/Blog/Post';
import BlogStuff from "../components/Blog/BlogStuff";
import BlogEmailLink from "../components/Blog/BlogEmailLink";
import PropTypes from "prop-types";

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
          <p>Jakub Jirák - Medium feed</p>
          <h3><BlogStuff/> at <BlogEmailLink/>.</h3>
          <p>I reserve the right to write only about what I myself see fit, I apologise in advance to anyone concerned about refusing to review or collaborate, but I only write about things I believe in/would use myself. I see it as my social responsibility not to offer or influence people with products/software that I don't trust myself.</p>
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

const Blog = () => (
  <Main
    title="Blog"
    description={BlogStuff+" at "+ BlogEmailLink+"."}
  >
        {renderBlogs()}
  </Main>
  );

Blog.propTypes = {
  fullPage: PropTypes.bool,
};

Blog.defaultProps = {
  fullPage: false,
};

export default Blog;


