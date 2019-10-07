import React from 'react'
import './spinner.css'

const Spinner = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-pacman pac-man">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div> <style type="text/css"></style>
    </div >
  )
}

export default Spinner