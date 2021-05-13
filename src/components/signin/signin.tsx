import React , { FC , ReactNode } from "react";
import { Link } from "react-router-dom";
import { FormHeader } from "../../partial-components/form-header/formHeader";
import { InputField } from "../../partial-components/input-field/inputField";

const SignInComponent:FC<ReactNode> = ()=>{
    const emailInputHandler = (value:string):void =>{
        console.log(value)
    }
    const passInputHandler = (value:string):void =>{
        console.log(value)
    }
    const nameInputHandler = (value:string):void =>{
        console.log(value)
    }
    const updateState = ():void =>{
    }
    return(
        <div id="sign-in">
        <div className="container">
            <div className="pop-up sign-in">
                <FormHeader title={"Sign In"} iconImg={'repair.svg'}/>
                <div className="wrapper">
                    <form className="d-flex flex-column" >
                        <InputField label={'Email'}  type={'text'}  changeHandler={emailInputHandler} />
                        <InputField label={'Password'}  type={'password'}  changeHandler={passInputHandler} />
                        <InputField label={'Name'}  type={'text'}  changeHandler={nameInputHandler} />

                    <div>
                    <button className="mx-auto mt-4" onClick={updateState}>Sign In</button>
                    </div>
                    </form>
                    <div className="text-right">
                        <Link to="/">log In</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}

export default SignInComponent