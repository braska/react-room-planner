import React, {PropTypes, Component} from 'react';

export default class PlannerCanvas extends Component {
  render() {
    return <div></div>;
  }
}

PlannerCanvas.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  entities: PropTypes.array.isRequired,
  moveEntity: PropTypes.func.isRequired
};
