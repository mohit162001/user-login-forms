import React, { useRef, useState } from "react";

function  LoginUseRef() {
    const email = useRef();
    const password = useRef();
    const [isEmailInValid,setIsEmailInValid] = useState(false);
    const [isPasswordInValid,setIsPasswordInValid] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const emailInvalid = !enteredEmail.includes('@')
    const passwordInvalid =  enteredPassword.length<5
    if(emailInvalid){
        setIsEmailInValid(true);
    }
    if(passwordInvalid){
        setIsPasswordInValid(true);
        return
    }
    setIsEmailInValid(false)
    setIsPasswordInValid(false)
    console.log(enteredEmail,enteredPassword)
    email.current.value=''
    password.current.value=''
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Using Ref</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            id="email"
            type="email"
            name="email"
          />
          <div className="control-error">
         {isEmailInValid? <p>PLease enter vaild email</p>:""}
        </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={password}
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div className="control-error">
         {isPasswordInValid? <p>PLease enter vaild password</p>:""}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

export default LoginUseRef;
