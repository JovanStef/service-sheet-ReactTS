import { BehaviorSubject, Observable , Subject } from 'rxjs';
import { IUser, User } from '../models/IUser';

const authDataKey = 'authData';


export const userService = (url?:string) =>{
const userSubject = new BehaviorSubject<any>(null);

function login( username:string , password:string ){
    return new Observable((observer:any)=>{
        fetch( url + '?username=' + username + '&password=' + password)
            .then(response => response.json())
            .then(data => {
                try{
                    let user = new User(data[0].username , data[0].name ,data[0].password , data[0].id )
                    userSubject.next(user);
                    observer.next(data);
                    observer.complete();
                    localStorage.setItem(authDataKey , JSON.stringify(user))
                }catch(err){
                    observer.next(err.message);
                    observer.complete();
                }
            })
    })
}
function getUser(){
    let nn:any = localStorage.getItem(authDataKey)
    userSubject.next(JSON.parse(nn))
    return userSubject.asObservable();
}

    return {
        login,
        getUser
    }
}
