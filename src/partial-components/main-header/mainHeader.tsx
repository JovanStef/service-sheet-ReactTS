import { FC } from "react";
import { ReactNode } from "react";
import { IpropsHeaderMain } from "../../models/IProps";

 
export const MainHeader:FC<IpropsHeaderMain> = ({title , lPlate , carImgUrl , badgeImgUrl}) => {
    let carImg = carImgUrl || "../assets/images/delantera.jpg";
    let badgeImg = badgeImgUrl !== 'true' ? badgeImgUrl : "../assets/images/badge.jpg"
    return (  
<div className="main-header d-flex align-times-center" id="main-header"> 
    <div className="container d-flex flex-row align-items-center">
        <div className="info-container align-self-end d-flex flex-row justify-space-between align-items-end">
            <div className="img-container d-none d-sm-block">
                {badgeImgUrl && <div className="badge-holder">
                    <img src={badgeImg} alt="" />
                </div>}
                <div className="icon-holder">
                     <img src={carImg} alt="repair-logo" />
                </div>
            </div>
            <div className="data-container d-flex flex-row justify-space-between align-items-end">
                <div className="name ml-0 ml-sm-3">
                    <p className="m-0 px-4 py-2">{title}</p>
                </div>
                {lPlate && <div className="lplate d-none d-sm-block">
                    <p className="m-0 px-2 py-1">{lPlate}</p>
                </div>}
            </div>
        </div>
        <div className="menu-container ml-auto">
            <img src="../assets/icons/profile-user.svg" alt="" />
        </div>
    </div>
</div>
    );
}
 
