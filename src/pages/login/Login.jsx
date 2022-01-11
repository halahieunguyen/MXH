import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Avatar, Button, Checkbox, CircularProgress, FormControlLabel, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email_or_phone: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        
        </div>
        <div className="loginRight">
            
          <form className="loginBox" onSubmit={handleClick}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              className="loginInput"
              label="Email/SĐT"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              inputRef={email}
              variant="outlined"
            />
           <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật Khẩu"
              type="password"
              className="loginInput"
              autoComplete="current-password"
              inputRef={password}
              variant="outlined"
            />
             <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Nhớ Mật Khẩu"
            />
            <Button
              className="loginButton"
              type="submit"
              fullWidth
              variant="contained"
              disabled={isFetching}
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Đăng Nhập"
              )}
            </Button>
        
           
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Quên Mật Khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Đăng Ký Tài Khoản Mới"}
                </Link>
              </Grid>
            </Grid>
            
            
          </form>
        </div>
      </div>
    </div>
  );
}
