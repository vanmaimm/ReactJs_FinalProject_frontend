import React,{Component} from 'react';
import './css/LoginForm.css';
import history from '../history';
import { Link } from 'react-router-dom';

class Profile extends Component{
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
            localStorage.setItem("user",response.user_id);
        });
        history.push('/');
    }

    render(){

        return(
            <div>
               <table>
                   <tr>
                       <td>Họ và tên</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>Địa chỉ</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>Số điện thoại</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td>Email</td>
                       <td></td>
                   </tr>
                   <tr>
                       <td> <button><Link to="/change-password" exact>Thay đổi mật khẩu!</Link></button> </td>
                   </tr>
               </table>
            </div>
        )
    }
}

export default Profile;