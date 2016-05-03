import React, {PropTypes, Component} from 'react';
import Entity from './Entity';
import '../../styles/components/planner_canvas.scss'

export default class PlannerCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 1
    };
  }

  calcZoom() {
    this.setState({zoom: document.getElementsByTagName('svg')[0].getBoundingClientRect().width / this.props.width});
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.calcZoom());
    this.calcZoom();
  }

  render() {
    var rects = [];
    if (this.props.entities.length) {
      this.props.entities.forEach((entity) => {
        rects.push(<Entity entity={entity} zoom={this.state.zoom} key={rects.length + 1} moveEntity={this.props.moveEntity} canvasWidth={this.props.width} canvasHeight={this.props.height} />);
      });
    }

    return <svg style={{height: this.props.height * this.state.zoom}}>
      {rects}
    </svg>;
  }
}

PlannerCanvas.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  entities: PropTypes.array.isRequired,
  moveEntity: PropTypes.func.isRequired
};
