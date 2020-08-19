import React,{Component} from 'react';
import './css/LoginForm.css';
import { Link , withRouter} from 'react-router-dom';

class LoginForm extends Component{
    constructor(){
        super();
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin(event){
        event.preventDefault();
        let username = event.target["username"].value;
        let password = event.target["password"].value;
        let user = {
            username:username,
            password:password,
        }
        
        let userInJson = JSON.stringify(user);
     //   console.log(userInJson);
        fetch("http://127.0.0.1:8000/api/auth/login", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: userInJson
        })
        .then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            if(response==400){
                alert("username or password is wrong!");
                document.getElementById('username').value="";
                document.getElementById('password').value="";
            }else{
                localStorage.setItem("user",response.user_id);
                alert("Ban da dang nhap thanh cong!");
                this.props.history.push('/');
                window.location.reload(); 
            }
            
        });
       
    }

    render(){

        return(
            <div className="background" >
            <div className="loginbox">
                
                <h1>Login Here</h1>
                <form onSubmit = {this.onLogin}>
                    <p>Username</p>
                    <input type="text" name="username" id="username" placeholder="Enter Username"/>
                    <p>Password</p>
                    <input type="password" name="password" id="password" placeholder="Enter Password"/>
                    <input type="submit"  name="" value="Login"/>
                    <a href="#">Lost your password?</a><br/>
                    <Link to="/signin">Đăng ký tại đây!</Link>
                </form>
            </div>
            </div>
        )
    }
}

export default withRouter( LoginForm);