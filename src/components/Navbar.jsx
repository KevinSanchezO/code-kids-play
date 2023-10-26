import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();

    const redirectFAQ = () => {
        navigate('faq', {

        });
    }

    const redirectAboutUs = () => {
        navigate('sobre-nosotros', {

        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img src='/vite.svg' alt="Logo" width="40" height="40" className='mx-2'/>
                Code Kids Play!
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* <NavLink 
                        className= {({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className= {({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className= {({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search  
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button 
                    className='mnav-item nav-link btn'
                    onClick={redirectAboutUs}>
                        Sobre nosotros
                    </button>
                </ul>
            </div>
        </nav>
    )
}
