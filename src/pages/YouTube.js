import React, { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from '../components/YouTube/Post';
import PropTypes from "prop-types";

const renderVideos = () => {
  const [data, setData] = useState({ videos: [] });

  useEffect(async () => {
    const result = await axios(
      'https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UC0osYUKB5oePEdYRsamlhSw',
    );
    console.log(result.data)
    setData(result.data);
  }, []);

  if (data.items) {
    return <article className="blog-post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">YouTube</Link></h2>
          <p>Jakub Jirák - YouTube feed</p>
        </div>
      </header>
          {data.items.map((video) => (
            <Post
              data={video}
              key={`${video.guid}`}
            />
          ))}
    </article>
  }
};

const YouTube = () => (
  <Main
    title="YouTube"
    description=""
  >
        {renderVideos()}
  </Main>
  );

YouTube.propTypes = {
  fullPage: PropTypes.bool,
};

YouTube.defaultProps = {
  fullPage: false,
};

export default YouTube;


