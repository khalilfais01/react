import React from 'react';
import './Login.css'

function Login() {
  return (
    <div>
    <div className="login">
          <div className="header">
          <h1>Login Here</h1>
          <img src="http://192.168.1.2/images/img_3.jpg" className='imgs' alt='profile' />
          </div>
          <form action="/" method="get">
            <label><b>UserName :</b></label>
          <input type="text" className="inputs_login" name="username" placeholder="UserName"/><br/>
          <br/>
          <label><b>Password :</b></label>

          <input type="password" className="inputs_login" name="password" placeholder="Password"/>
          <br/>
          <br/>
          <input type="submit" className="button_login" value="Login HERE"/>
          </form>
    </div>
    </div>
  );
}
export default Login;
