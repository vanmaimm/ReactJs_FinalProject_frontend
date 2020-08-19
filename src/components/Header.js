import React, { Component } from "react";
import "./css/Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm.js";
import SignInForm from "./SignInForm.js";
import Profile from "./Profile.js";
import ChangePassword from "./ChangePassword.js";
import TyperoomDetail from "./TyperoomDetail.js";
import Booking from "./Booking";
import Home from "./Home";
import Contact from "./Contact";


class Header extends Component {

  constructor() {
    super();
    var user_id = localStorage.getItem("user");
    this.state = {
      id: user_id,
      account: [],
      typerooms:[]
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
  componentDidMount(){
    fetch("http://127.0.0.1:8000/api/typeroom", {
      headers: {
        "Content-Type":"application/json"
    },
  })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({ typerooms: response });
      });
  }
  render() {
    let item = this.state.account;
    console.log(this.state.typerooms);
    return (
      <Router >
        <div className="Header">
          <div class="wrapper">
            <nav class="menu">
              <ul class="clearfix">
                <li className="current-item">
                  <Link to="/" exact>
                    Trang chủ
                  </Link>
                </li>
              {
                this.state.typerooms.map((typeroom,i)=>
                <li> <a href={"/chi-tiet/"+typeroom.id} >  {typeroom.name}</a></li>
                )}
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
                    <button><Link to="/profile">Hello {item.username}</Link></button> 
                    </li>
                  </div>
                )}
                 <li>
                  <Link to="/dat-phong">Đặt phòng</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signin">
            <SignInForm />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/change-password">
            <ChangePassword />
          </Route>
          <Route path="/chi-tiet/:typeroom_id">
            <TyperoomDetail />
          </Route>
          <Route path="/dat-phong">
            <Booking />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <div className='footer'>
        <div className="content_footer">
        <div>
          <h3>Về chúng tôi</h3>
          <p>Khách sạn Vian Hotel với tiêu chuẩn 3 sao, công suất thiết kế phòng sang trọng, đạt chuẩn cùng đội ngũ nhân viên bản địa giàu kinh nghiệm ở vị trí đắc địa giữa trung tâm thành phố Đà Nẵng.</p>
        </div>
        <div>
          <h3>Liên hệ</h3>
          <p>Email: vianhotel@gmail.com</p>
          <br></br>
          <p>Phone: 1234567879</p>
          <br></br>
          <p>Địa chỉ: 99 Tô Hiến Thành, Đà Nẵng</p>
        </div>
        </div>
        </div>
      </Router>
      
    );
  }
}

export default Header;
