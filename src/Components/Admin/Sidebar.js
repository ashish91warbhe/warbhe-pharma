import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="container">
                <div className="winlead ">

                </div>
            </div>
            <ul>
                <li>
                    <Link className='fw-light text-decoration-none active text-dark' to={'#'}>Profile</Link>                    </li>

                <li>
                    <Link className='fw-light text-decoration-none active text-dark' to={'#'}>View User</Link>
                </li>
            </ul>
            
        </>
    )
}

export default Sidebar;