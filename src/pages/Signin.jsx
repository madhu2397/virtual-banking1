import React from 'react'
import { NavLink } from 'react-router-dom';
import signupImg from "../images/home.png";

const SignUp = () => {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h3>JOIN OUR TEAM</h3>
                                    <h1>
                                        <strong className="brand-name"> Creating an account </strong> is extremely Easy
                                </h1>

                                    <h2 className="my-3">
                                        Get everything setup and ready in under 10 minutes. All you need to do is add your information and you're ready to go.
                                </h2>

                                    <div className="mt-3">
                                        <NavLink to="/login" className="btn-get-started" > Start Now </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={ signupImg } className="img-fluid animated" alt="signup img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;