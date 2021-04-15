import React, {useState} from 'react'
import SigninFom from '../SigninForm/SigninFom'

const AuthForm = () => {
    const [formToggle, setFormToggle] = useState(true)
    return (
        <div>
            <SigninFom/>
        </div>
    )
}

export default AuthForm
