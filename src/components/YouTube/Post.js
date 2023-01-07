import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const allowed_extensions = ['jpg', 'jpeg', 'svg', 'png', 'gif'];

const matcher = (string) => {
  if (string.includes('images')) {
    return true;
  } else {
    const lastIndex = string.lastIndexOf('.');
    const extension = string.substr(lastIndex + 1).toLowerCase();
    return allowed_extensions.includes(extension);
  }
};

const Post = ({ data }) => (
  <div className="blog-mini-post">
    <a href={data.link}>
      <article className="mini-post">
        <header>
          <h3>{data.title}</h3>
          <time className="published">{dayjs(data.pubDate)
            .format('MMMM, YYYY')}</time>
        </header>
        {matcher(data.thumbnail) && <div className="description-text">
          <img src={data.thumbnail} width="480px" alt={data.title}/>
        </div>}
        <br/>
        <button
          className={`skillbutton 'skillbutton-active'`}
          type="button"
        >
          Play video...
        </button>
      </article>
    </a>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    pubDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: [PropTypes.string.isRequired],
  }).isRequired,
};

export default Post;
