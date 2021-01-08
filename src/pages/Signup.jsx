import React, { useState } from 'react';

const SignUp = () => {

  const [data, setData] = useState({
      fullname: "",
      phone: "",
      email: "",
  });

  const [dataErr, setDataErr] = useState(false)



  const InputEvent = (event) =>{
      const {name,value} = event.target;

      let item = event.target.value;
      if(item.length<4)
      {
        setDataErr(true)
      }
      else{
        setDataErr(false)
      }

      setData((preVal)=>{
          return {
              ...preVal,
              [name] : value,
          };
      });
  };

  const formSubmit = (e) =>{
      e.preventDefault();
      alert(`user ${data.firstname} ${data.lastname}. successfully registered`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center user"> User Registration</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="IdFirstName" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="IdFirstName"
                  name="firstname"
                  value={data.firstname}
                  onChange={InputEvent}
                  placeholder="first-name..." /> {dataErr ?  <span>Invalid</span> : null}
                
              </div>

              <div class="mb-3">
                <label for="IdLastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="IdLastName"
                  name="lastname"
                  value={data.lastname}
                  onChange={InputEvent}
                  placeholder="last-name..." /> 
            
              </div>


              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                {dataErr ?  <span>Invalid</span> : null}
                <label for="floatingPassword">Password</label>
              </div>

              <br />
              <div class="mb-3">
                <label for="IdPhoneNumber" class="form-label">Phone Number</label>
                <input type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number" /> 
                  
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br/> <br/> <br/><br/>
    </>
  )
}

export default SignUp;
