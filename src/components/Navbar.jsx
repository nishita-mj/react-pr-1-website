import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
            <div className="container d-flex justify-content-between ">
                <img src="https://famous-souffle-7b597e.netlify.app/images/logo/logo-black.svg" alt="" />
                <div>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link">Home</a></li>
                        <li className="nav-item"><a className="nav-link">Marketplace</a></li>
                        <li className="nav-item"><a className="nav-link">About</a></li>
                        <li className="nav-item"><a className="nav-link">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <button className='btn btn-primary'>
                        Get Started
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar