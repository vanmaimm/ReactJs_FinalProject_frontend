import React,{Component} from 'react';
import './css/SignInForm.css';
import history from '../history';
import { Link } from 'react-router-dom';

class SignInForm extends Component{
    onSignin(event){
        event.preventDefault();
        let username = event.target["username"].value;
        let password = event.target["password"].value;
        let name = event.target["name"].value;
        let address = event.target["address"].value;
        let phone = event.target["phone"].value;
        let email = event.target["email"].value;
        let user = {
            username:username,
            password:password,
            name:name,
            address:address,
            phone:phone,
            email:email
            
        }
        
        let userInJson = JSON.stringify(user);
     //   console.log(userInJson);
        fetch("http://127.0.0.1:8000/api/auth/register", {
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
            localStorage.setItem("user",response.user_id);
        });
        history.push('/');
    }

    render(){

        return(
            <div className="signinbox">
                <img src="/Image/user.png" class="avatar"/>
                <h1>Login Here</h1>
                <form onSubmit = {this.onSignin}>
                    <p>Username</p>
                    <input type="text" name="username" placeholder="Enter Username" required/>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Enter Password" required/>
                    <p>Họ và tên</p>
                    <input type="text" name="name" placeholder="Enter Name" required/>
                    <p>Địa chỉ</p>
                    <input type="text" name="address" placeholder="Enter Address" required/>
                    <p>Số điện thoại</p>
                    <input type="text" name="phone" placeholder="Enter Phone Number"required/>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Enter Email" required/>
                    <span>Bạn đã có tài khoản? Đăng nhập <Link to="/login">tại đây!</Link> </span>
                    <br/>
                    <input type="submit"  name="" value="Sign In"/>
                </form>
            </div>
        )
    }
}

export default SignInForm;