import React from 'react'
import { NavLink } from 'react-router-dom';
import discoverImg from "../images/discover.png";

const Discover = () => {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h3 id="head1">UNLIMITED ACCESS</h3>
                                    <h1>
                                        <strong className="brand-name"> Login to your account </strong> at any time
                                </h1>

                                    <h2 className="my-3">
                                        We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.
                                </h2>

                                    <div className="mt-3">
                                        <NavLink to="/withdraw" className="btn-get-started" > Withdraw Money </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img1">
                                <img src={ discoverImg } className="img-fluid animated" alt="discover img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discover;