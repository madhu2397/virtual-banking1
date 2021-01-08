import React, { useState } from 'react';

const CreateAccount = () => {

  const [data, setData] = useState({
      firstname: "",
      lastname: "",
      bankname:"",
      account: "",
      ifsc: "",
      phone: "",
      email: "",
  });

  const InputEvent = (event) =>{
      const {name,value} = event.target;

      setData((preVal)=>{
          return {
              ...preVal,
              [name] : value,
          };
      });
  };

  const formSubmit = (e) =>{
      e.preventDefault();
      alert(`Account created successfully`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center" id="account"> Create Account</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="IdFirstName1" class="form-label" id="accountid">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="IdFirstName"
                  name="firstname"
                  value={data.firstname}
                  onChange={InputEvent}
                  placeholder="first-name..." />
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

              <div class="mb-3">
                <label for="IdLastName" class="form-label">Bank Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="IdbankName"
                  name="bankname"
                  value={data.bankname}
                  onChange={InputEvent}
                  placeholder="bank-name..." />
              </div>

              <div class="mb-3">
                <label for="Idaccount" class="form-label">Account Number</label>
                <input
                  type="number"
                  class="form-control"
                  id="Idaccountno"
                  name="account"
                  value={data.account}
                  onChange={InputEvent}
                  placeholder="account number..." />
              </div>

              
              <div class="mb-3">
                <label for="Idifsc-code" class="form-label">IFSC code</label>
                <input type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="ifsc"
                  value={data.ifsc}
                  onChange={InputEvent}
                  placeholder="ifsc code" />
              </div>

              
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
                <button class="btn btn-outline-primary" type="submit">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default CreateAccount;
