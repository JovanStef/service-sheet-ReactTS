import React , { FC , ReactNode } from "react";
import { MainHeader } from "../../partial-components/main-header/mainHeader";
import { ServiceSheetCard } from "../../partial-components/service-sheet-card/serviceSheetCard";

const ServiceSheetComponent:FC<ReactNode> = ()=>{
let ssCard = {
    number:1,
    serviceSheet:
    {km:20000,
    date:new Date(),
    type:'regular',
    shop:'some service shop',
    description:'Lorem ipsum',
    price:10000}
}
let sssCard = {
	serviceSheet:
	{km:20000,
	date:new Date(),
	type:'regular',
	shop:'some service shop',
	description:'Lorem ipsum',
	price:10000}
}
    return(
        <div>
          <MainHeader title={'Username'} badgeImgUrl={'true'} lPlate={'sk 123456 ab'} />
					<div id="service-sheet-list">
						<div className="container">
							<div className="wrapper">
								<ServiceSheetCard   {...ssCard}/>
								<ServiceSheetCard   {...sssCard}/>
								<ServiceSheetCard   {...ssCard}/>

							</div>
						</div>
        	</div>
        </div>
    )
}

export default ServiceSheetComponent;