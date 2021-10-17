import React, { Component } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";

class Login extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        Login Tes
        <Footer />
      </>
    );
  }
}

export default Login;