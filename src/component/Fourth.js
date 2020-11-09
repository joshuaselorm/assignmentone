import React from 'react'
import {Link} from 'react-router-dom'
function Fourth() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about' >About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Fourth
