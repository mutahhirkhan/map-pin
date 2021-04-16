import React, {useState} from 'react'
import SigninFom from '../SigninForm/SigninFom'
import SignupForm from '../SignupForm/SignupForm'
import "./AuthForm.css"
import { Button } from '@material-ui/core';

const AuthForm = () => {
    const [formToggle, setFormToggle] = useState("signin")
    return (
        <div className="auth-form">
            <div className="auth-switcher">
        <Button 
        onClick={() => setFormToggle('signin')}
            style={{ position: "relative" }} background="none" color="black">
          Signin
           {formToggle === "signin" ? <div className="underline"></div>: null} 
        </Button>
        <Button
        onClick={() => setFormToggle('signup')}
          style={{ position: "relative", justifySelf: "end" }}
          background="none" color="black"
        >
          SignUp
          {formToggle === "signup" ? <div className="underline"></div>: null} 
        </Button>
      </div>
      <div className="auth-fields center">
          {formToggle === 'signin' ? <SigninFom/> : <SignupForm/>}
      </div>
      <div className="auth-form-btn">
        <div className="or-separator">OR</div>
        <Button variant="contained" style={{ marginTop: "2em", width: "70%" }}>
          Signin with Google
        </Button>
      </div>
        </div>
    )
}

export default AuthForm
