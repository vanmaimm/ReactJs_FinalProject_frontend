import React,{Component} from 'react';
import './css/ChangePassword.css';
import history from '../history';
import { Link } from 'react-router-dom';

class ChangePassword extends Component{
    ChangePassword(event){
        event.preventDefault();
        let oldPass = event.target["oldPassword"].value;
        let newPass = event.target["newPassword"].value;
        let confirm = event.target["confirmPassword"].value;
        let user_id = localStorage.getItem("user");
        if(newPass!= confirm){
            alert("Mật khẩu xác nhận sai");
        }else{
            let infor = { 
                id:user_id,
                oldPass:oldPass,
                newPass: newPass
            }
            let inforInJson = JSON.stringify(infor);
            fetch("http://127.0.0.1:8000/api/checkPass", {
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                }, 
                body: inforInJson
            })
            .then((response) => {
                return response.json();
            }).then((response) => { 
              if(response==400){
                  alert("Mật khẩu cũ sai!");
              }else{
                  alert("Bạn đã thay đổi mật khẩu thành công");
              }
            });
        }
    }

    render(){

        return(
            <div className="change-password">
                <h1>Thay đổi mật khẩu</h1>
                <form onSubmit = {this.ChangePassword}>
                    <p>Mật khẩu cũ</p>
                    <input type="password" name="oldPassword" placeholder="Enter old password"/>
                    <p>Nhập mật khẩu mới</p>
                    <input type="password" name="newPassword" placeholder="New Password"/>
                    <input type="password" name="confirmPassword" placeholder=" Confirm Password"/>
                    <input type="submit"  name="" value="Thay đổi"/>
                </form>
            </div>
        )
    }
}

export default ChangePassword;