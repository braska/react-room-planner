import React, {PropTypes, Component} from 'react';

export default class Entity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: this.props.entity.x,
      y: this.props.entity.y
    }
  }

  componentDidMount() {
    this.refs.rect.onmousedown = (e) => {
      let startX = e.pageX;
      let startY = e.pageY;

      let onmousemove = (mouseMoveEvent) => {
        if(mouseMoveEvent.stopPropagation) mouseMoveEvent.stopPropagation();
        if(mouseMoveEvent.preventDefault) mouseMoveEvent.preventDefault();
        mouseMoveEvent.cancelBubble=true;
        mouseMoveEvent.returnValue=false;


        let newX = this.state.x + (mouseMoveEvent.pageX - startX) / this.props.zoom;
        let newY = this.state.y + (mouseMoveEvent.pageY - startY) / this.props.zoom;
        if (newX < 0) {
          newX = 0;
        }
        if (newX > (this.props.canvasWidth - this.props.entity.width)) {
          newX = this.props.canvasWidth - this.props.entity.width;
        }

        if (newY < 0) {
          newY = 0;
        }
        if (newY > (this.props.canvasHeight - this.props.entity.height)) {
          newY = this.props.canvasHeight - this.props.entity.height;
        }

        document.onmousemove = null;
        this.setState({
          x: newX,
          y: newY
        }, () => {
          startX = mouseMoveEvent.pageX;
          startY = mouseMoveEvent.pageY;
          document.onmousemove = onmousemove;
        });
        return false;
      };


      document.onmousemove = onmousemove;

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        this.props.moveEntity(this.props.entity, this.state.x, this.state.y);
      };
    };

    this.refs.rect.onDragStart = () => false;
  }

  render() {
    let fontSize = this.props.entity.width * this.props.zoom / this.props.entity.name.length;
    if (fontSize > this.props.entity.height * this.props.zoom / 2) {
      fontSize = this.props.entity.height * this.props.zoom / 2;
    }

    return <g>
      <text x={(this.state.x + this.props.entity.width / 2) * this.props.zoom} y={(this.state.y + this.props.entity.height / 2) * this.props.zoom} alignmentBaseline="central" textAnchor="middle" fill="blue" fontWeight="bold" fontSize={fontSize} style={{zIndex: -10}}>{this.props.entity.name}</text>
      <rect ref="rect" x={this.state.x * this.props.zoom} y={this.state.y * this.props.zoom} fill={this.props.entity.color} width={this.props.entity.width * this.props.zoom} height={this.props.entity.height * this.props.zoom} />
      </g>;
  }
}

Entity.propTypes = {
  entity: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  canvasWidth: PropTypes.number.isRequired,
  canvasHeight: PropTypes.number.isRequired,
  moveEntity: PropTypes.func.isRequired
};
