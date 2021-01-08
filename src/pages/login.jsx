import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
    });

    
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname} you are successfully signined`);
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">SignIn</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">user Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="username"
                                    value={data.username}
                                    onChange={InputEvent}
                                    placeholder="Enter uesr name" />
                            </div>

                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <br />
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">SignIn</button>
                            </div>
                            
                            <br />
                            <div>
                            <p>If I am not registered? <NavLink to="/signin">SignUp</NavLink> </p>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <br/>
                        <br/>
                        <br/>
                        <br/> <br/> 
                        <br/>
                        <br/><br />
                        
        </>
    )
}

export default Login;
