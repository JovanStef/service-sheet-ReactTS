import { IServiceSheet } from "./IServiceSheet";

export interface IPropsInputField {
    label:string,
    type:string,
    changeHandler(val:string):any
}
export interface IpropsHeaderInput{
    title:string,
    iconImg?:string
}
export interface IpropsHeaderMain{
    title:string,
    carImgUrl?:string,
    badgeImgUrl?:string,
    lPlate?:string,
}

export interface IPropsCarItem{
    model:string,
    lPlate:string,
    carImgUrl?:string,
    badge?:string,
}

export interface IPropsSSCard{
    number?:number,
    serviceSheet:IServiceSheet
}
export interface IPropsCardHeader{
    title:string,
    number?:number | string
}
export interface IPropsSSCardFront{
    title:string,
    number?:number | string
    km:number,
    date:Date,
    type:string,
    shop:string
}

export interface IPropsSSCardBack{
    title:string,
    number?:number | string
    description:string,
    price:number
}

export interface IPropsCardMenu{
    serviceId:number
}