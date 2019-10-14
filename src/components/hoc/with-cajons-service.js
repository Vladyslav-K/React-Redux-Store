import React from 'react';
import { CajonsServiceConsumer } from '../cajons-service-context';

const withCajonsService = () => (Wrapped) => {

  return (props) => {
    return (
      <CajonsServiceConsumer>
        {
          (cajonsService) => {
            return (<Wrapped {...props}
              cajonsService={cajonsService} />);
          }
        }
      </CajonsServiceConsumer>
    );
  }
};

export default withCajonsService;
