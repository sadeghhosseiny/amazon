import React from 'react';
import logo from '../amazon_PNG25.png';
import styles from './Navbar.module.css';

function Navbar() {
    return (

        <div className={`${styles.navF}`}>
            <nav className={`navbar navbar-dark ${styles.navbar}`}>

                <img src={logo} className={`${styles.logo} navbar-brand mr-lg-5`} />
                {/* <div className={`${styles.searchHeader}`}> */}

                <form className={` ${styles.searchForm}`}>

                    <div className="input-group">
                        <input type="text" className={`form-control py-4 ${styles.searchInput}`} />
                        <div class="input-group-append">
                            <button className="btn btn-warning" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                {/*</div> */}





                <div className="d-flex mx-2">
                    <div className="mx-3 pt-2">
                        <span>
                            <i className="fas fa-flag text-white" />
                        </span>

                    </div >
                    <div className="mx-3">

                        <div className="text-white">
                            Hello, Sign In
                        </div>
                        <span className="text-capitalize text-white font-weight-bold">
                            account & list
                        </span>

                    </div>
                    <div className="mx-3">

                        <div className="text-white">
                            Returns
                    </div>
                        <span className="text-white font-weight-bold">
                            & Orders
                    </span>
                    </div>
                    <div className="d-flex pt-2 mx-1">
                        <span>
                            <i className="fas fa-shopping-cart text-white" />
                        </span>
                        <span className="d-sm-none d-lg-block text-white text-capitalize font-weight-bold">
                            cart
                    </span>
                    </div>

                </div>
                {/* <ul className="navbar-nav">
                <li className="nav-item mx-3 mt-4 text-light">
                <span>
                <i className="fas fa-flag" />
                </span>
                </li>
                <li className="nav-item mx-2 text-light">
                <small className="text-default">
                Hello, Sign in
                </small>
                <p className="text-capitalize">account & list</p>
                </li>
            </ul> */}

            </nav>
        </div>

    )

}

export default Navbar