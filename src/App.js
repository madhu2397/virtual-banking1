import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Discover from './pages/Discover';
import Service from './pages/Service';
import SignUp from "./pages/Signin";
import SignIn from "./pages/Signup";
import Navbar from "./Navbar";
import Footer from "../src/pages/footer";
import Login from "../src/pages/login"
import Transfer from "./pages/Deposit"
import Withdraw from "../src/pages/Withdraw"
import CreateAccount from "../src/pages/CreateAccount"
import { connect } from 'react-redux';
//import index from '../src/store/index'
//import Provider from 'react-redux'
class App extends Component{ 
  render(){
  // let transactionHistory = (
  //   <div>
  //    {this.props.transactionHistory.map((log) => { return <li>{log.transactionType} ${log.amount} | closing balance: ${log.newBalance} | {log.date} </li> })} 
  //   </div>
   //)
  return (
    <>
    <BrowserRouter>
       <Navbar />  
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/transfer" component={Transfer} />
        <Route exact path="/withdraw" component={Withdraw} />
        {/* <Route exact path="/login1" component={Login1} /> */}
        <Route exact path="/account" component={CreateAccount} />
        <Redirect to="/" />        
      </Switch>
     
      {/* <div>
        <h2>Transaction History</h2>
        {transactionHistory}
      </div> */}
      <Footer />
      </BrowserRouter>
    </>
  ); 
};
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
  )(App);
