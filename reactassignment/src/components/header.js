import React, {useState} from 'react';
import './header.css'; 
function RegistrationForm() {

    const [email, setEmail] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(email,lastName,password,confirmPassword);
    }

    return(
        <div className="form">
            <div className="form-body">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Registration</h3>
            </div>

            <div className="email">
                    <label className="form__label" for="email">Email </label><br/>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
              
                <div className="lastname">
                    <label className="form__label" for="lastName">Name </label><br/>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
               
                <div className="password">
                    <label className="form__label" for="password">Password </label><br/>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label><br/>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
          
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
          
        </div>
       
    )       
}

export default RegistrationForm