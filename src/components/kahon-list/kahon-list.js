import React, { Component } from 'react';
import KahonListItem from '../kahon-list-item';
import { connect } from 'react-redux';

import { withKahonsService } from '../hoc';
import { kahonsLoaded } from '../../actions';
import { compose } from '../../utils';

import './kahon-list.css';

class KahonList extends Component {

  componentDidMount() {

    const { kahonsService } = this.props;
    const data = kahonsService.getKahons();

    this.props.kahonsLoaded(data);
  }

  render() {
    const { kahons } = this.props;
    return (
      <ul className="kahon-list">
        {
          kahons.map((kahon) => {
            return (
              <li key={kahon.id}><KahonListItem kahon={kahon} /></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ kahons }) => {
  return { kahons };
};

const mapDispatchToProps = {
  kahonsLoaded
};

export default compose(
  withKahonsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(KahonList);
