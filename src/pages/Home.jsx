import React from 'react'
import { NavLink } from 'react-router-dom';
import homeImg from "../images/home.png";


const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> 
                                    <strong className="brand-name"> Virtual Banking </strong> Made Easy 
                                </h1>

                                <h2 className="my-3">
                                    SignUp for a new account today and receive $250 in credit towards your next payment
                                </h2>

                                <div className="mt-3">
                                    <NavLink to="/login" className="btn-get-started" > Get Started</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={ homeImg } className="img-fluid animated" alt="home img"/>
                            </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;