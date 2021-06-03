import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';
import CourseBar from './Courses/CourseBar';

const handleProps = ({
  categories, skills,
}) => ({
  buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { All: true }),
  skills,
});

class SkillsAndCourses extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps(
      {
        categories: props.categories,
        skills: props.skills,
      },
    );
  }

  getRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    return this.state.skills.filter((i) => i.university === undefined).sort((a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    }).filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
      .map((skill) => (
        <SkillBar
          categories={this.props.categories}
          data={skill}
          key={skill.title}
        />
      ));
  }

  getCoursesRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    return this.state.skills.filter((i) => i.university !== undefined).sort((a, b) => {
      let ret = 0;
      if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      return ret;
    }).filter((course) => (actCat === 'All' || course.category.includes(actCat)))
      .map((course) => (
        <CourseBar
          category={this.props.categories}
          data={course}
          key={course.title}
        />
      ));
  }

  getButtons() {
    return Object.keys(this.state.buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
        ...obj,
        [key]: (label === key) && !prevState.buttons[key],
      }), {});
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some((key) => buttons[key]);
      return { buttons };
    });
  }

  renderSkills() {
    return (
      <div className="skill-button-container">
        {this.getRows()}
      </div>
    );
  }

  renderCourses() {
    return (
      <>
        <div className="title">
          <h3>Courses</h3>
        </div>
        <div className="skill-button-container">
          {this.getCoursesRows()}
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="skills">
        <div className="link-to" id="skills" />
        <div className="title">
          <h3>Skills</h3>
          <p>Note: I think these sections are silly, but everyone seems to have one.
            Here is a *mostly* honest overview of my skills.
          </p>
        </div>
        <div className="skill-button-container">
          {this.getButtons()}
        </div>
        {this.state.skills.filter((i) => i.university === undefined).length > 0
        && this.renderSkills()}
        {this.state.skills.filter((i) => i.university !== undefined).length > 0
        && this.renderCourses()}
      </div>
    );
  }
}

SkillsAndCourses.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

SkillsAndCourses.defaultProps = {
  categories: [],
  skills: [],
};

export default SkillsAndCourses;
