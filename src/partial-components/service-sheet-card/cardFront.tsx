import { FC } from "react"
import { IPropsSSCardFront } from "../../models/IProps"
import { CardHeader } from "./cardHeader"

export const CardFront: FC<IPropsSSCardFront> = ({title , number}) =>{
    return(
        <div>
            <CardHeader title={title} number={number}/>
        </div>
    )
}