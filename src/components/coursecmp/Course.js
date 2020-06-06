import React from 'react';
import './Course.css';
import LeftMenu from './left-menu/left-menu.js';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenuser: ""
    }
  }
  componentDidUpdate() {
    const { token } = this.props.location.state.token;
    this.setState({tokenuser: {token}});
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
