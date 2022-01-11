import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function Register() {
  const bird_day = useRef();
  const gender = useRef();
  const password = useRef();
  const password_confirmation = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const email_or_phone= useRef();
  const history = useHistory();


  const handleClick = async (e) => {
    e.preventDefault();
    if (password_confirmation.current.value !== password.current.value) {
      password_confirmation.current.setCustomValidity("Mật khẩu không trùng khớp");
    } else {
      const user = {
        first_name: first_name.current.value,
        last_name: last_name.current.value,
        gender: gender.current.value,
        bird_day: bird_day.current.value,
        email_or_phone: email_or_phone.current.value,
        password: password.current.value,
        password_confirmation: password_confirmation.current.value,
      };
      try {
        await axios.post("http://localhost/MXH/public/api/register", user);
        history.push("/login");
        alert("Đăng ký thành công!")
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="registerWrapper">
        <div className="loginLeft">
        </div>
        <div className="loginRight">
          <form className="registerBox" onSubmit={handleClick}>
          <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Họ"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            inputRef={first_name}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Tên"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            inputRef={last_name}
            margin="normal"
          />
          
        </Grid>
        </Grid>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Giới Tính</FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel inputRef={gender} value="0" control={<Radio />} label="Nam" />
          <FormControlLabel inputRef={gender} value="1" control={<Radio />} label="Nữ" />
          <FormControlLabel inputRef={gender} value="2" control={<Radio />} label="Khác" />
        </RadioGroup>
        </FormControl>  
        <div style={{color: "rgba(0, 0, 0, 0.54)"}}>Sinh Nhật:</div>
        <TextField variant="outlined"  inputRef={bird_day} type="date" name="date"  className="bird_day"  margin="normal"/>
          <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={email_or_phone}
                  type="email"
                  margin="none"
                  variant="outlined"
                />
           
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật Khẩu"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={password}
                  minLength="6"
                  margin="none"
                  variant="outlined"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Nhập lại mật khẩu "
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={password_confirmation}
                  margin="none"
                  variant="outlined"
                />
                </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
              color="primary"
            >
              Đăng Ký
            </Button>
            <Grid container justify="flex-end">
              <Grid item> 
                <Link href="#" sx variant="body2">
                  Đăng nhập tại đây!
                </Link>
              </Grid>
              </Grid>
            
          </form>
        </div>
      </div>
    </div>
  );
}
