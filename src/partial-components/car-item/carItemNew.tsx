import { FC } from "react";

export const CarItemNew: FC<any> = () => {
    
    return ( 
        <div className="car-item-card car-item-card-new d-flex flex-column justify-content-end default-card">
            <div className="bottom-container d-flex flex-row justify-content-center align-items-center px-3">
                <div className="badge-container d-none d-sm-block">
                    <img src="../assets/icons/image.svg" alt="" />
                    </div>
                <div className="model-container align-self-end px-5 py-1">
                    add new
                </div>
            </div>
            </div>
     );
}
 
