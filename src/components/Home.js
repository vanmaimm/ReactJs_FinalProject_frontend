import React, { Component } from "react";
import "./css/Home.css";

class Home extends Component {
  book(event) {
    event.preventDefault();
    let start_day = event.target["start_day"].value;
  }
  render() {
    return (
      <div className="home-page">
        <div className="image">
          <img src="/Image/img.jpg" />
        </div>
        {/* <div className="search">
          <form onSubmit={this.book}>
            <label>Nhận phòng:</label>
            <input type="date" name="start_day"></input>
            <label>Trả phòng:</label>
            <input type="date" name="end_day"></input>
            <label>Số lượng người:</label>
            <input type="number"></input>
            <button>Tìm phòng</button>
          </form>
        </div> */}
        <div className="title">
          <h1>ViAn Hotel</h1>
        </div>

        <div className="infor">
          <img src="/Image/slide 3.jpg"></img>
          <div>
            <div></div> <b> ĐỐI VỚI KHÁCH HÀNG</b>
            <div>Sự hài lòng của khách hàng là ưu tiên hàng đầu.</div>
            <div>
              Chúng tôi đề cao sử dụng các sản phẩm thân thiện với môi trường và
              nguồn thực phẩm giàu dinh dưỡng, có nguồn gốc rõ ràng để đảm bảo
              sức khoẻ. Bên cạnh đó, cơ sở vật chất đầy đủ và tiện nghi cũng
              được thiết kế phù hợp cho nhu cầu nghỉ ngơi thư giãn tuyệt đối của
              quý khách.
            </div>
            <div>
              Mỗi thành viên trong đại gia đình khách sạn Ninh Bình Hidden Charm
              luôn tâm niệm phải luôn lắng nghe, thấu hiểu khách hàng để đem đến
              những dịch vụ tốt và cần thiết nhất. Chúng tôi tin rằng sự phục vụ
              xuất phát từ trái tim mỗi người là giá trị cốt lõi để đảm bảo đem
              lại những trải nghiệm đáng nhớ cho những vị khách yêu quý.
            </div>
          </div>
        </div>
        <div className="infor">
          <div>
            <div>
              <b>1. Giờ vào/ ra:</b>
              <br></br>
              <p>Giờ nhận phòng: 14:00 PM</p>
              <p>Giờ trả phòng: 12:00 PM</p>
              <p>
                Trả phòng trễ (có phụ phí tuỳ thuộc vào tình trạng phòng có
                sẵn), nhận phòng sớm (có phụ phí tuỳ thuộc vào tình trạng phòng
                có sẵn)
              </p>
              <p>
                Miễn phí trẻ em dưới 06 tuổi ở ghép với cha mẹ (chỉ một trẻ em)
              </p>
            </div>
            <br></br>
            <div>
              <b>2. Địa điểm:</b>
              <br></br>
              <p>Cách trung tân thành phó 3km</p>
              <p>Cách biển Mỹ Khê 200m</p>
              <p>Cách cầu Rồng 2km</p>
            </div>
          </div>
          <img src="/Image/le.jpg"></img>
        </div>
      </div>
    );
  }
}

export default Home;
