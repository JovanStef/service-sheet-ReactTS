import React , { FC , ReactNode, useState } from "react";
import { IUser, User } from "../../models/IUser";
import { userService } from "../../services/userService";
import {FormHeader} from "../../partial-components/form-header/formHeader";
import { InputField } from "../../partial-components/input-field/inputField";
import { Link } from "react-router-dom";

const LoginComponent:FC<ReactNode> = ()=>{
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const emailInputHandler = (value:string):void =>{
        console.log(value)
    }
    const passInputHandler = (value:string):void =>{
        console.log(value)
    }
    const updateState = () =>{
        console.log({username} , {password})
        userService("http://localhost:3004/users").login("jd@mail.com" , "johndoepassword")
            .subscribe((result : any)=>{
                console.log(result)
    
        })
    }


    return(
    <div id="login">
        <div className="container">
            <div className="pop-up login">
                <FormHeader title={"Login"} iconImg={'repair.svg'}/>
                <div className="wrapper">
                    <form className="d-flex flex-column" >
                        <InputField label={'Email'}  type={'text'}  changeHandler={emailInputHandler} />
                        <InputField label={'Password'}  type={'password'}  changeHandler={passInputHandler} />
                    <div>
                    <button className="mx-auto mt-4" onClick={updateState}>Log In</button>
                    </div>
                    </form>
                    <div className="text-right">
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}

export default LoginComponent;