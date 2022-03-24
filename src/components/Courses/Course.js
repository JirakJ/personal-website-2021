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

const Course = ({ data }) => (
  <div className="blog-mini-post">
    <a href={`https://udemy.com${data.url}`}>
      <article className="mini-post">
        <header>
          <h3>{data.title}</h3>
          <time className="published">{data.content_info}</time>
        </header>
        {matcher(data.image_480x270) && <div className="description-text">
          <img src={data.image_480x270} alt={data.title}/>
          { data.headline && <p>{data.headline}</p> }
        </div>}
        <br/>
        <button
          className={`skillbutton 'skillbutton-active'`}
          type="button"
        >
          Go to course...
        </button>
      </article>
    </a>
  </div>
);

Course.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image_480x270: PropTypes.string,
    is_paid: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    avg_rating: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    num_reviews: PropTypes.number.isRequired,
    num_published_lectures: PropTypes.number.isRequired,
    instructional_level_simple: PropTypes.number.isRequired,
    content_info: PropTypes.number.isRequired,
  }).isRequired,
};

export default Course;
