import { FC } from "react";
import { IPropsCarItem } from "../../models/IProps";

export const CarItem: FC<IPropsCarItem> = ({model , lPlate , badge ,carImgUrl}) => {
    
    return ( 
        <div className={"car-item-card d-flex flex-column "+(!carImgUrl && " default-card")} style={{backgroundImage: `url("${carImgUrl}")`}}>
            <div className="l-plate-container d-flex flex-row align-items-center justify-content-end w-100">
                <div className="px-2 py-1">
                    {lPlate}
                </div>
            </div>
            <div className="bottom-container d-flex flex-row justify-content-between align-items-center px-3">
                <div className="d-none d-sm-block"></div>
                <div className={"badge-container d-none d-sm-block " + (badge && "badge")}>
                    {!badge && <img src="../assets/icons/image.svg" alt="" />}
                    {badge && <img src={badge} alt="" />}
                    </div>
                <div className="model-container align-self-end px-1 py-1">
                    {model}
                </div>
                <div className="card-menu-container d-flex flex-row justify-content-between">
                    <div className="edit menu-item d-flex justify-content-center align-items-center">
                        <img src="../assets/icons/draw.svg" alt="" />
                    </div>
                    <div className="delete menu-item d-flex justify-content-center align-items-center">
                        <img src="../assets/icons/trash.svg" alt="" />
                    </div>
                </div>
            </div>
            </div>
     );
}
 
