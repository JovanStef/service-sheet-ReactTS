import React , { FC , ReactNode } from "react";
import { IUser, User } from "../../models/IUser";
import { CarItem } from "../../partial-components/car-item/carItem";
import { CarItemNew } from "../../partial-components/car-item/carItemNew";
import { MainHeader } from "../../partial-components/main-header/mainHeader";
import { userService } from "../../services/userService";

const CarListComponent:FC<ReactNode> = ()=>{
    let user:User
    // userService().getUser().subscribe((result:IUser | any)=>{
    //     user = new User(result.username , result.name , result.password , result.id);
    //     console.log(user.getUsername())

    // })

    return(
        <div>
            <MainHeader title={'Username'} badgeImgUrl={'true'} lPlate={'sk 123456 ab'} />
<div id="car-list" >
    <div className="container">
        <div className="wrapper">
            
            <CarItem model={'octavia'} lPlate={'sk 123456 ab'} carImgUrl={"../assets/images/delantera.jpg"} badge={"../assets/images/badge.jpg"}/>
            <CarItem model={'octavia'} lPlate={'sk 123456 ab'} carImgUrl={"../assets/images/delantera.jpg"} badge={"../assets/images/badge.jpg"}/>
            
            <CarItemNew />
        </div>
    </div>
</div>
        </div>
    )
}

export default CarListComponent;