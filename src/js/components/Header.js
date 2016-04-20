import React, {PropTypes, Component} from 'react';
import Info from './Info';
import {Grid} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    const {room} = this.props;
    return <Grid fluid className="intro">
      <h1 className="intro-title">Room Planner</h1>
      <p className="intro-description">Easy to plan</p>
      <Info width={room.width} height={room.height} count={room.entities.length}/>
    </Grid>
  }
}

Header.propTypes = {
  room: PropTypes.object.isRequired
};
