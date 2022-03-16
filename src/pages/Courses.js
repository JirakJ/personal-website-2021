import React from 'react';
import Main from '../layouts/Main';
import { Link } from 'react-router-dom';
import Course from '../components/Courses/Course';
import { courses } from '../data/udemy/courses';

const renderCourses = () => {
    return <article className="course" id="courses">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Courses</Link></h2>
          <p>Ing. Jakub Jirák - udemy feed</p>
        </div>
      </header>
        {courses.map((course) => (
          <Course
            data={course}
            key={`${course.title}${Math.random() * 1000}`}
          />
        ))}
    </article>
};

const Courses = () => (<Main
  title="Blog"
  description="Ing. Jakub Jirák - Medium feed"
>
  {renderCourses()}
</Main>);

export default Courses;


