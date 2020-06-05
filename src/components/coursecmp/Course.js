import React from 'react';
import './Course.css';
import LeftMenu from './left-menu/left-menu.js';

class Course extends React.Component {
  componentDidAmount() {
    const { token } = this.props.location.state.token;
    console.log({token});
  }
  render() {
    return (
      <div className="course">
        <LeftMenu/>
      </div>
    );
  }
}

export default Course;
