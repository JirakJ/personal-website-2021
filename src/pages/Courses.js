import React, { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Course from '../components/Courses/Course';

const renderCourses = () => {
  const [data, setData] = useState({ courses: [] });

  useEffect(async () => {
    const config = {
      method: 'get',
      url: 'https://www.udemy.com/api-2.0/users/766460/taught-profile-courses/?page=1&organizationCoursesOnly=false&fields[course]=@default,discount,num_published_lectures,headline,instructional_level_simple,avg_rating,num_reviews,buyable_object_type,content_info,rating,image_100x100,caption_locales,locale,badges,learn_url&filter_hq_courses=true&page_size=100',
    };
    const result = await axios(config);
    setData(result.data);
  }, []);

  if (data.results) {
    console.debug(data)
    return <article className="course" id="courses">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Courses</Link></h2>
          <p>Ing. Jakub Jirák - udemy feed</p>
        </div>
      </header>
          {data.items.map((post) => (
            <Course
              data={post}
              key={`${post.title}${Math.random() * 1000}`}
            />
          ))}
    </article>
  }
};

const Courses = () => (<Main
  title="Blog"
  description="Ing. Jakub Jirák - Medium feed"
>
  {renderCourses()}
</Main>);

export default Courses;


