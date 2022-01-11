import React, { Component} from "react";
import axios from "axios";
class Welcome extends Component {
  constructor(props) {
    super(props)
    //Chỉ định một state
    this.state = { username: "Hieu", src_img: [] ,data_img: [], tokens: []};
  }
  async componentDidMount() {
    // TAO TAI KHOAN
    // var i;
    // for (i=46;i<=100; i++) {
    //   await new Promise(resolve => setTimeout(resolve, 2000));
    //   var formData = new FormData();
    //   formData.append('email_or_phone', 'test' + i + '@gmail.com');
    //   formData.append('password', 'hieuhala127');
    //   formData.append('password_confirmation', 'hieuhala127');
    //   formData.append('first_name', 'Nguyễn Văn');
    //   formData.append('last_name', 'A' + i);
    //   formData.append('bird_day',Math.floor(Math.random() * 12 + 1990)  + '-' + Math.floor(Math.random() * 12 + 1) + '-' +  Math.floor(Math.random() * 28 + 1));
    //   formData.append('gender', Math.floor(Math.random() * 3 + 1));
    //   await axios

    //   .post("http://kma1.com/api/register", formData)
    //  }

  }
  renderName(params) {
    this.setState({
      username: document.getElementById('hieu').value
    });
  }
   upImage(params) {
    if (params.target.files && params.target.files[0]) {
      let reader = new FileReader();
      reader.onload = async () => {
        var result = await reader.result
        this.setState({ src_img: [...this.state.src_img, result] })
        this.setState({ data_img: [...this.state.data_img, params.target.files[0]] })
      console.log(this.state)
      };
      reader.readAsDataURL(params.target.files[0]);
    }
  }
  selectedImage () {
    this.inputElement.click()
  }
  async uploadPost () {
        var formData = new FormData();
this.state.data_img.map(image => {
  formData.append('images[]', image);

})
    formData.append('data', 'Chào');
     await axios

    .post("http://kma1.com/api/post/create", formData)



  }
  async logins () {
    var i;
    var j;
    for (i=2;i<=2; i++) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      var formData = new FormData();

        formData.append('email_or_phone', 'test' + i + '@gmail.com');
      formData.append('password', 'hieuhala127');
      await axios

      .post("http://kma1.com/api/login", formData)
      .then((result) => {
      console.log(result)
      this.setState({ src_img: [...this.state.src_img, result] })
      }
      )
    for (j=2;j<=2; j++) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      var formData = new FormData();

        formData.append('email_or_phone', 'test' + i + '@gmail.com');
      formData.append('password', 'hieuhala127');
      await axios

      .post("http://kma1.com/api/login", formData)
      .then((result) => {
      console.log(result)
      this.setState({ src_img: [...this.state.src_img, result] })
      }
    }

    }
  }
  render() {
    let image = null
    image = this.state.src_img.map( (img, index) =>
       <img alt="Anh" key={index} style={{width:"400px",height:"400px"}} src={img}></img>
    )
    return (
      <div>
        <h1>{this.state.username}</h1>
        <input id="hieu" value={this.state.username} onChange={() => this.renderName()}></input>
        <div style={{width:"80px",height:"30px", backgroundColor:"blue", color:"white" , borderRadius: "6px", textAlign: "center"}} onClick={() => this.selectedImage()}><span style={{display: "inline-block"}}>Thêm ảnh</span></div>
        <input  hidden ref={input => this.inputElement = input} type="file" onChange={(event) => this.upImage(event)}/>
       {image}
        {/* <div contentEditable="true" >123</div> */}
        <div style={{width:"80px",height:"30px", backgroundColor:"blue", color:"white" , borderRadius: "6px", textAlign: "center"}} onClick={() => this.uploadPost()}><span style={{display: "inline-block"}}>Đăng</span></div>
        <div style={{width:"80px",height:"30px", backgroundColor:"blue", color:"white" , borderRadius: "6px", textAlign: "center"}} onClick={() => this.logins()}><span style={{display: "inline-block"}}>login</span></div>
      </div>
    );
  }
}
export default Welcome;