import React, { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from '../components/Blog/Post';
import BlogStuff from "../components/Blog/BlogStuff";
import BlogEmailLink from "../components/Blog/BlogEmailLink";
import Analytics from "../components/Template/Analytics";
import ScrollToTop from "../components/Template/ScrollToTop";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Navigation from "../components/Template/Navigation";
import SideBar from "../components/Template/SideBar";
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


