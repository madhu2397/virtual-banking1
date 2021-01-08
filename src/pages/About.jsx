import React from 'react'
import { NavLink } from 'react-router-dom';
import aboutImg from "../images/about.png";

const About = () => {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h3 id="head">PREMIUM BANK</h3>
                                    <h1>
                                        <strong className="brand-name"> Unlimited Transactions </strong>with zero fees
                                </h1>

                                    <h2 className="my-3">
                                       Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.
                                </h2>

                                    <div className="mt-3">
                                        <NavLink to="/transfer" className="btn-get-started" > Deposit Money </NavLink>
                                    </div>
                                </div>

                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={aboutImg} className="img-fluid animated" alt="about img" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;