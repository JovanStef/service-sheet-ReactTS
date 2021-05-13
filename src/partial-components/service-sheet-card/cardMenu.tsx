import { FC } from "react"
import { IPropsCardMenu } from "../../models/IProps"

export const CardMenu: FC<IPropsCardMenu> = ({serviceId})=>{
    return (
        <div className="scard-menu mt-auto d-flex flex-row">
            {/* <div className="img-holder d-flex justify-content-center align-items-center"><img src="../assets/icons/information-brown.svg" alt="" /></div> */}
            <div className="img-holder d-flex justify-content-center align-items-center"><img className="arrow-icon" src="../assets/icons/right-arrow-brown.svg" alt="" /></div>
            <div className="img-holder d-flex justify-content-center align-items-center"><img src="../assets/icons/label-brown.svg" alt="" /></div>
            <div className="img-holder d-flex justify-content-center align-items-center"><img src="../assets/icons/draw-brown.svg" alt="" /></div>
            <div className="img-holder d-flex justify-content-center align-items-center"><img src="../assets/icons/trash-brown.svg" alt="" /></div>

        </div>
    )
}