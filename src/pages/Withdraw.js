import React from 'react'
//import { NavLink } from 'react-router-dom';
import withdrawImg from "../images/withdraw.png";
import { connect } from 'react-redux'
class Withdraw extends React.Component{
  render(){
    return(
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        <strong className="brand-name"> PREMIUM BANK </strong>
                                    </h1>
                                    <br />
                                    <h1>
                                        <strong className="brand-name"> <h1>Balance: {this.props.balance}</h1>   </strong>
                                    </h1>

                                <br />


                                <button className="mainbtn" onClick={() => this.props.withdraw(50)}>Withdraw $50</button>
                                <br />
                                <button className="mainbtn" onClick={() => this.props.withdraw(100)}>Withdraw $100</button>
                                    
                                </div> 

                                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={withdrawImg} className="img-fluid animated" alt="deposite img" />
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
    //in last app values were hard coded, now we pass a payload depending on which button is clicked
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Withdraw);


//export default Withdraw;
