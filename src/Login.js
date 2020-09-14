import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    //
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => console);
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          className='login__logo--icon'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt='Facebook f logo (2019).svg'
        />
        <img
          className='login__logo--name'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1200px-Facebook_Logo_%282019%29.svg.png'
          alt='Facebook Logo (2019).svg'
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
