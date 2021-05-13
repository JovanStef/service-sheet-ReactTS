import React, { FC } from "react";
import { IPropsSSCard } from "../../models/IProps";
import { CardBack } from "./cardBack";
import { CardFront } from "./cardFront";
import { CardMenu } from "./cardMenu";

export const ServiceSheetCard: FC<IPropsSSCard> = ({number , serviceSheet}) =>{
	let frontData = {
		title:'Service',
    number:number,
    km:100000,
    date:new Date(),
    type:'Regular',
    shop:'Some service shop'
	}
	let backData = {
    title:'Info',
    number:'icon',
    description:'Lorem ipsum',
    price:50000
	}
    return (
        <div id="service-sheet-card" className="d-flex flex-column">
					<CardFront {...frontData}/>
					<CardBack {...backData}/>
					<CardMenu serviceId={1} />
        </div>
    )
}