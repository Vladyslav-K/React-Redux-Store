import React from 'react'
import './spinner.css'

const Spinner = () => {
  return (
    <div className="lds-css ng-scope">
      <div styleName="width:100%;height:100%" className="lds-pacman">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div><style type="text/css"></style>
    </div>
  )
}

export default Spinner