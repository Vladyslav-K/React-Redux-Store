import React, { Component } from 'react';
import KahonListItem from '../kahon-list-item';
import { connect } from 'react-redux';

import { withKahonsService } from '../hoc';
import { fetchBooks, kahonAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './kahon-list.css';

const KahonList = ({ kahons, onAddedToCart }) => {
  return (
    <ul className="kahon-list">
      {
        kahons.map((kahon) => {
          return (
            <li key={kahon.id}>
              <KahonListItem
                kahon={kahon}
                onAddedToCart={() => onAddedToCart(kahon.id)}
              />
            </li>
          )
        })
      }
    </ul>
  );
};

class KahonListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  };

  render() {
    const { kahons, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    };

    if (error) {
      return <ErrorIndicator />
    }

    return <KahonList kahons={kahons} onAddedToCart={onAddedToCart} />

  };
};



const mapStateToProps = ({ kahonList: { kahons, loading, error } }) => {
  return { kahons, loading, error };
};

const mapDispatchToProps = (dispatch, { kahonsService }) => {
  return {
    fetchBooks: fetchBooks(kahonsService, dispatch),
    onAddedToCart: (id) => dispatch(kahonAddedToCart(id))
  };
};

export default compose(
  withKahonsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(KahonListContainer);