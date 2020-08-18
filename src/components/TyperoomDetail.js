import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./css/TyperoomDetail.css";

class TyperoomDetail extends Component {
  constructor(props) {
    super(props);
    var id = this.props.match.params.typeroom_id;
    this.state = {
      infor: [],
    };
    this.getInfor(id);
  }
  getInfor(id) {
    fetch("http://127.0.0.1:8000/api/typeroom/detail/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ infor: response });
      });
  }

  render() {
    let infor = this.state.infor;
    return (
      <div className="typeroom_detail">
        <br></br>
        <span>
          <Link to="/">Trang chủ</Link>
          {">>" + infor.name}
        </span>
        <div className="detail">
          <div>
            <img src={"http://127.0.0.1:8000/storage/" + infor.image}></img>
          </div>
          <div className="content">
            <div>
              <b>{infor.name}</b>{" "}
            </div>
            <div>
              <b>Diện tích: </b>
              {infor.area}
            </div>
            <div>
              <b>Giá/Ngày: </b>
              {infor.price_per_day} VNĐ
            </div>
            <div>
              <b>Số lượng người: </b>
              {infor.max_person} người lớn
            </div>
            <div><button><Link> Đặt Phòng</Link> </button></div>
          </div>
        </div>
        <div>
          <b>Mô tả: </b>
          {infor.description}
        </div>
        <br></br>
        {/* <div className='phong_khac'>
          <div>
            <a href={"/chi-tiet/1"} >
            <img src={"http://127.0.0.1:8000/storage/" + infor.image}></img>
            <h3>{infor.name}</h3>
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withRouter(TyperoomDetail);
