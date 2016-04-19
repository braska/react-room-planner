import React, {PropTypes, Component} from 'react';

export default class Info extends Component {
  render() {
    const {width, height, count} = this.props;
    return <p>Room size: {width}x{height}. Number of entities: {count}</p>
  }
}

Info.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
};
