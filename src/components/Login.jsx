import Input from "./Input.jsx";
import useInput from "./useInput.js";
import { isEmail, hasMinLength } from "../Utility/validation.js";
//custom hook
function Login() {
  const {
    userInput: emailValue,
    handleInputBlur: handleEmailBlur,
    handleUserInput: handleEmailInput,
    hassError: emailHasError,
    handleClearInput:handleClearEmail
  } = useInput("", isEmail);


  const {
    userInput: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleUserInput: handlePasswordInput,
    hassError: passwordHasError,
    handleClearInput:handleClearPassword
  } = useInput("", hasMinLength, 6);

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    if(emailHasError || passwordHasError){
      return;
    }
    const credential = {
      email:emailValue,
      password:passwordValue
    }
    console.log(credential)
    handleClearEmail()
    handleClearPassword()
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          lable="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailInput}
          error={emailHasError ? "PLease enter vaild email" : false}
        />
        <Input
          lable="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          value={passwordValue}
          onChange={handlePasswordInput}
          error={passwordHasError ? "PLease enter vaild password" : false}
        />
      </div>

      <p className="form-actions">
        <button className="button">Login</button>
      </p>
    </form>
  );
}

export default Login;
