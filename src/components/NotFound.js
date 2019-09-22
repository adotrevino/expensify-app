import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () =>{
    return(
        <div>
            <p>404 Page Not Found</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default NotFound