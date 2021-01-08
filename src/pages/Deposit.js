import React from 'react'
//import { NavLink } from 'react-router-dom';
import deposite1Img from "../images/deposite1.png";
import {connect} from 'react-redux'

class Deposite extends React.Component {
  render(){
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
                                        <strong className="brand-name"> Acceptable Denomination </strong>
                                </h1>
                                <h1>Balance: {this.props.balance}</h1>
                                <br />

                                <div class="input-group mb-3">
                                    <input type="number" 
                                     class="form-control" placeholder="Enter Amount" aria-label="Enter Amount" aria-describedby="button-addon2"
                                     onChange={e => this.setState({ number: e.target.value })}/>
                                    
                                    <button class="btn btn-outline-secondary" 
                                    type="button" id="button-addon2"
                                    onClick={(amount) => this.props.deposit(parseInt(this.state.number, 10))}>Submit</button>
                                </div>

                                    {/* <div className="mt-3">
                                        <NavLink to="/discover" className="btn-get-started" > Get Started </NavLink>
                                    </div>*/}
                                </div> 

                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={deposite1Img} className="img-fluid animated" alt="deposite img" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
                                }
                              }
                              
const mapStateToProps = state => {
  return { 
    balance: state.balance,
    transactionHistory: state.transactionHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deposit: (amount) => dispatch({type:'deposit', value: amount}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Deposite);


//export default Deposite;
