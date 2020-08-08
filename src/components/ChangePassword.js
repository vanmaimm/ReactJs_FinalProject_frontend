import React,{Component} from 'react';
import './css/ChangePassword.css';
import history from '../history';
import { Link } from 'react-router-dom';

class ChangePassword extends Component{
    ChangePassword(event){
        event.preventDefault();
        let old = event.target["newPassword"].value;
        let newPassword = event.target["oldPassword"].value;
        let confirm = event.target["confirmPassword"].value;

        if(newPassword!= confirm){
            alert("Mật khẩu xác nhận sai");
        }
    //     let user = {
    //         username:username,
    //         password:password,
    //     }
        
    //     let userInJson = JSON.stringify(user);
    //  //   console.log(userInJson);
    //     fetch("http://127.0.0.1:8000/api/auth/login", {
    //         method: "post",
    //         headers: {
    //             "Content-Type":"application/json"
    //         },
    //         body: userInJson
    //     })
    //     .then((response) => {
    //         return response.json();
    //     }).then((response) => {
    //         console.log(response);
    //         localStorage.setItem("user",response.user_id);
    //     });
    //     history.push('/');
    }

    render(){

        return(
            <div className="change-password">
                <h1>Thay đổi mật khẩu</h1>
                <form onSubmit = {this.ChangePassword}>
                    <p>Mật khẩu cũ</p>
                    <input type="password" name="oldPassword" placeholder="Enter old password"/>
                    <p>Nhập mật khẩu mới</p>
                    <input type="password" name="newPassword" placeholder="Enter Password"/>
                    <p>Nhập lại mật khẩu mới</p>
                    <input type="password" name="confirmPassword" placeholder="Enter Password"/>
                    <input type="submit"  name="" value="Thay đổi"/>
                </form>
            </div>
        )
    }
}

export default ChangePassword;