import React,{Component} from 'react';
import './css/LoginForm.css';
import { Link , withRouter} from 'react-router-dom';

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }}
        onNameChange(event) {
            this.setState({name: event.target.value})
          }
        
          onEmailChange(event) {
            this.setState({email: event.target.value})
          }
        
          onMessageChange(event) {
            this.setState({message: event.target.value})
          }
        
        handleSubmit(e) {
            e.preventDefault();
    
        fetch("http://127.0.0.1:8000/api/sendEmail",{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
            (response) => (response.json())
           ).then((response)=>{
          if (response.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.status === 'fail'){
            alert("Message failed to send.")
          }
        })
        }
        resetForm(){
        
            this.setState({name: "", email: "", message: ""})
         }
    render(){
        return(
            <div className="loginbox">
                
            <h1>Liên hệ</h1>
            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                <p>Họ và tên</p>
                <input type="text" name="name" id="name" placeholder="Enter your name" value={this.state.name}  onChange={this.onNameChange.bind(this)} required/>
                <p>Email</p>
                <input type="email" name="email" id="email" placeholder="Enter your email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
                <p>Nội dung</p>
                <textarea name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)}> </textarea>
                <input type="submit"  name="" value="Gửi"/>
             </form>
        </div>
          
        )
    }
  
}

export default withRouter( Contact);