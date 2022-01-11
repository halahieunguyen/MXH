import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  
  dispatch({ type: "LOGIN_START" });
  
  try {
    const headers = { 
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL01YSFwvcHVibGljXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjQxNjU1MjM4LCJleHAiOjE2NDE2NTg4MzgsIm5iZiI6MTY0MTY1NTIzOCwianRpIjoiYkJ0NzUyRUpDS21uc0s2RiIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.vmIQXIH0SJinnG7VDL4LQ0pYoGMnKZYDsplufol3qyw',
    }
    var id = 2
    var x = 'http://localhost/MXH/public/api/user?';
    x = x + 'user_id=' + id;
    const res = await axios.get( x , {headers} );

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
