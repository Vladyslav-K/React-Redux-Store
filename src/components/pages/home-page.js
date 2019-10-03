import React from 'react';
import KahonList from '../kahon-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const HomePage = () => {
  return (
    <div>
      <KahonList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
