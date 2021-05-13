import { FC } from "react";
import { IpropsHeaderInput } from "../../models/IProps";


export const FormHeader:FC<IpropsHeaderInput>=({title , iconImg})=>{

    return(
    <div>
        <div className="header d-flex flex-row align-items-center">
            {iconImg && <div className="icon-holder">
                <img src={`../../assets/icons/${iconImg}`} alt="repair-logo" />
            </div>}
            
            <p className="m-0 mx-auto">
                {title}
            </p>
        </div>
    </div>
    )
}