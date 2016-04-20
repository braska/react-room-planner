import React, {PropTypes, Component} from 'react';
import ListRow from './ListRow';

export default class List extends Component {
  render() {
    var rows = [];
    if (this.props.entities.length) {
      this.props.entities.forEach((entity) => {
        rows.push(<ListRow entity={entity} number={rows.length + 1} key={rows.length + 1} setEntityWidth={this.props.setEntityWidth} setEntityHeight={this.props.setEntityHeight}  deleteEntity={this.props.deleteEntity} />);
      });
    } else {
      rows.push(<tr key={1}><td colSpan="5"><p style={{textAlign: 'center', fontWeight: 'bold', padding: '20px 0'}}>Empty</p></td></tr>);
    }

    return <div>
      <h3>List of entities</h3>
      <table className="table">
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Coordinates</td>
            <td>Width * Height</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>;
  }
}

List.propTypes = {
  entities: PropTypes.array.isRequired,
  setEntityWidth: PropTypes.func.isRequired,
  setEntityHeight: PropTypes.func.isRequired,
  deleteEntity: PropTypes.func.isRequired
};

