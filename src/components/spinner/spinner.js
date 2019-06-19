import React from 'react'
import './spinner.css'

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-flickr"><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner
