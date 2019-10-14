import React, { Component } from 'react';
import CajonListItem from '../cajon-list-item';
import { connect } from 'react-redux';

import { withCajonsService } from '../hoc';
import { fetchCajons, cajonAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './cajon-list.css';

const CajonList = ({ cajons, onAddedToCart }) => {
  return (
    <ul className="cajon-list">
      {
        cajons.map((cajon) => {
          return (
            <li key={cajon.id}>
              <CajonListItem
                cajon={cajon}
                onAddedToCart={() => onAddedToCart(cajon.id)}
              />
            </li>
          )
        })
      }
    </ul>
  );
};

class CajonListContainer extends Component {

  componentDidMount() {
    this.props.fetchCajons()
  };

  render() {
    const { cajons, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    };

    if (error) {
      return <ErrorIndicator />
    }

    return <CajonList cajons={cajons} onAddedToCart={onAddedToCart} />

  };
};



const mapStateToProps = ({ cajonList: { cajons, loading, error } }) => {
  return { cajons, loading, error };
};

const mapDispatchToProps = (dispatch, { cajonsService }) => {
  return {
    fetchCajons: fetchCajons(cajonsService, dispatch),
    onAddedToCart: (id) => dispatch(cajonAddedToCart(id))
  };
};

export default compose(
  withCajonsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CajonListContainer);