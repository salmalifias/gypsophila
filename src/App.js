import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import Tentang from "pages/Tentang";
import DetailsPage from "pages/DetailsPage";
import Muartist from "pages/Muartist";
import Checkout from "pages/Checkout";
import Login from "pages/Login";
import Register from "pages/Register";
import PageNotFound from "pages/PageNotFound";
import Term from "pages/Term";
import Galeri from "pages/Galeri";
import Help from "pages/Help";
import Profile from "pages/Profile";
import Notifikasi from "pages/Notifikasi";
//import Example from "pages/ExamplePage";

import "assets/scss/style.scss";
// import "assets/bootstrap.min.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/tentang" component={Tentang} />
          <Route exact path="/mu-artist" component={Muartist} />
          <Route exact path="/properties/:id" component={DetailsPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/term" component={Term} />
          <Route path="/galeri" component={Galeri} />
          <Route path="/help" component={Help} />
          <Route path="/profile" component={Profile} />
          <Route path="/notifikasi" component={Notifikasi} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
