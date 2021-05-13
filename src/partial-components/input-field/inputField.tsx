import { FC } from "react";
import { IPropsInputField } from "../../models/IProps";


export const InputField:FC<IPropsInputField>=({label , type , changeHandler})=>{
    const returnValue = (_evt:any):void =>{
        changeHandler(_evt.target.value);
    }
    return(
        <div className="input-wrapper d-flex flex-column mt-4" >
        <label htmlFor={type} >{label}</label>
        <input type={type} onChange={returnValue} />
    </div>
    
    )
}