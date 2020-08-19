import React, { Component } from "react";
import "./css/Booking.css";

class Booking extends Component {
  //   book(event) {
  //     event.preventDefault();
  //     let start_day = event.target["start_day"].value;
  //   }
  constructor() {
    super();
    this.state = {
      arrival: "",
      checkout: "",
      number_person: "",
      typerooms: [],
    };
  

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/typeroom", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ typerooms: response });
      });
  }
  //   handleChange=input =>e =>{
  //       this.setState({
  //          [e.target.name]:e.target.value
  //       });
  //     }
  handleChange(event) {
    // this.setState({arrival: event.target["arrival"].value});
    var arrival = new Date(event.target.value); 
    this.setState({
      [event.target.name]: arrival,
      [event.target.name]: event.target.value,
    });
  }
  handleChange1(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    console.log((this.state.checkout-this.state.arrival)/(1000*3600*24));
    return (
      <div className="home-page">
        <div className="search">
          <label>Nhận phòng:</label>
          <input
            type="date"
            name="arrival"
            onChange={this.handleChange}
          ></input>
          <label>Trả phòng:</label>
          <input
            type="date"
            name="checkout"
            onChange={this.handleChange}
          ></input>
          <label>Số lượng người:</label>
          <input
            type="number"
            name="number_person"
            onChange={this.handleChange1}
          ></input>
        </div>
        <div className="flex">
          <div>
            {this.state.typerooms.map((infor) => (
              <div className="typeroom">
                <div>
                  <img
                    src={"http://127.0.0.1:8000/storage/" + infor.image}
                  ></img>
                </div>
                <div>
                  <h4>{infor.name}</h4>
                  <div>
                    {infor.area}|Số lượng khách: {infor.max_person}| Giá một
                    đêm: {infor.price_per_day} VNĐ
                  </div>
                </div>
                <div>
                  <select name = "room" onChange={this.handleChange1}>
                    <option value="0">0 phòng</option>
                    <option value="1">1 phòng</option>
                    <option value="2">2 phòng</option>
                    <option value="3">3 phòng</option>
                    <option value="4">4 phòng</option>
                    <option value="5">5 phòng</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
          <div className="booking">
            <h2>Đặt phòng</h2>
           <input value={this.state.arrival}></input> 
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
