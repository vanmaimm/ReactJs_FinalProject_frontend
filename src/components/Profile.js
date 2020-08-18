import React,{Component} from 'react';
import './css/Profile.css';
import history from '../history';
import { Link } from 'react-router-dom';

class Profile extends Component{
    constructor() {
        super();
        var user_id = localStorage.getItem("user");
        this.state = {
          id: user_id,
          user: [],
        };
        this.getUserById(user_id);
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
           //   console.log(response.user.user_infor.name);
           this.setState({ user: response.user.user_infor });
          });
      }

    render(){
       let acc= this.state.user;
        return(
            <div>
               <table>
                   <tr>
                       <td>Họ và tên</td>
                       <td> {acc.name}</td>
                   </tr>
                   <tr>
                       <td>Địa chỉ</td>
        <td>{acc.address}</td>
                   </tr>
                   <tr>
                       <td>Số điện thoại</td>
        <td>{acc.phone_number}</td>
                   </tr>
                   <tr>
                       {/* <td>Email</td>
        <td>{acc.email}</td> */}
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