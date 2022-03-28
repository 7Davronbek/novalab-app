import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    return (
        <>
            <div className="navBar">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <Link to='/'>
                                <h4>NovaLab</h4>
                            </Link>
                        </div>
                        <div className="col-6 ml-auto d-flex align-items-center justify-content-end">
                            <Link className={` ${location.pathname === '/' ? 'active' : ''}`} to='/' >Home</Link>
                            <Link className={` ${location.pathname === '/profile' ? 'active' : ''}`} to='/profile' >Profile</Link>
                            <Link className={` ${location.pathname === '/log-in' ? 'active' : ''}`} to='/log-in' >Log in</Link>
                            <Link className={` ${location.pathname === '/registration' ? 'active' : ''}`} to='/registration' >Registration</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar