import React from 'react';
import { KahonsServiceConsumer } from '../kahons-service-context';

const withKahonsService = () => (Wrapped) => {

  return (props) => {
    return (
      <KahonsServiceConsumer>
        {
          (kahonsService) => {
            return (<Wrapped {...props}
              kahonsService={kahonsService} />);
          }
        }
      </KahonsServiceConsumer>
    );
  }
};

export default withKahonsService;
