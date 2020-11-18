import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to={'/'} className="nav-link"> Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to={'/'} className="nav-link"> <span className="sr-only">(current)</span>Home</Link>
                    </li>
                    <li className="nav-item">
                        <span>CRUD - React, Redux, REST API & Axios</span>
                    </li>
                    <li className="nav-item">
                        <Link to={'/productos/nuevo'} className="nav-link btn btn-danger block">Agregar Producto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;