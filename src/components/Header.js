import React, { Component } from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm.js";
import SignInForm from "./SignInForm.js";
import history from "../history";

class Header extends Component {

  constructor() {
    super();
    var user_id = localStorage.getItem("user");
    this.state = {
      id: user_id,
      account: [],
    };
    this.getUserById(user_id);
    this.logout = this.logout.bind(this);
  }

  getUserById(id) {
    fetch("http://127.0.0.1:8000/api/profile", {
      headers: {
          "Authorization":id
      },
  })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ account: response.user });
      });
  }
  logout() {
    localStorage.removeItem("user");
    this.setState({ id: null });
  }

  render() {
    let item = this.state.account;
    console.log(item);
    return (
      <Router history={history}>
        <div className="Header">
          <div class="wrapper">
            <nav class="menu">
              <ul class="clearfix">
                <li className="current-item">
                  <Link to="/" exact>
                    Trang chủ
                  </Link>
                </li>
                <li>
                <Link to="/standard-room">Phòng Standard</Link></li>
                <li> <Link to="/superior-room">Phòng superior</Link></li>
                <li><Link to="/deluxe-room">Phòng deluxe</Link></li>
                <li>
                  <Link to="/news">Tin tức</Link>
                </li>
                <li>
                  <Link to="/contact">Liên hệ</Link>
                </li>

                {!this.state.id ? (
                    <div>
                    <li className="li" id="login">
                  <button> <Link to="/signin">Đăng ký</Link></button>
                  </li>
                  <li className="li" id="login">
                    <button><Link to="/login">Đăng nhập</Link></button> 
                  </li>
                 </div>
                ) : (
                    <div>
                    <li className="li" id="login">
                      <button onClick={this.logout}>Logout</button>
                    </li>
                    <li className="li" id="login">
                      <h5>Welcome {item.username}</h5>
                    </li>
                  </div>
                )}
              </ul>
            </nav>
          </div>
        </div>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signin">
            <SignInForm />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default Header;
