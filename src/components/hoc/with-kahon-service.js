import React from 'react'
import { KahonStoreServiceConsumer } from '../kahon-service-context'

const WithKahonStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <KahonStoreServiceConsumer>
        {
          (kahonStoreService) => {
            return (<Wrapped
              {...props}
              kahonStoreService={kahonStoreService}
            />)
          }
        }
      </KahonStoreServiceConsumer>
    )
  }
}

export default WithKahonStoreService