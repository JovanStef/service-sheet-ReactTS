import { FC } from "react"
import { IPropsCardHeader } from "../../models/IProps"

export const CardHeader: FC<IPropsCardHeader> =({title , number})=>{
     
    return (
        <div className="scard-header d-flex justify-content-between align-items-center">
            <div className="title ml-3">{title}</div>
            <div className="number-holder d-flex justify-content-center align-items-center align-self-start px-5 py-1 ">
                {number && <div>{'#'+number}</div>}
                {!number && <img src="../assets/icons/information.svg" alt="icon info"/>}
            </div>
            <div className="title invisible">{title}</div>
        </div>
    )
}