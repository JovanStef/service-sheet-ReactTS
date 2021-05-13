import { v4 as uuidv4 } from "uuid";
import { ICar } from "./ICar";

export interface IUser {
  id: string | undefined;
  name?: string;
  username: string;
  password?: string;
  cars?: Array<ICar>;
}

export class User implements IUser {
  id: string | undefined;
  name: string | undefined;
  username: string;
  password: string | undefined;
  cars: Array<ICar> = [];

  constructor(
    username: string,
    name: string | undefined,
    password: string | undefined,
    id?:string | undefined,
  ) {
    this.id = id ? id : this.setID();
    this.name = name;
    this.username = username;
    this.password = password;
  }

  // id
  public getID(): string | undefined {
    return this.id;
  }

  public setID(): string {
    this.id = uuidv4();
    return this.id;
  }
  // name
  public getName(): string | undefined {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  // username
  public getUsername(): string | number {
    return this.username;
  }

  public setUsername(newUserName: string): void {
    this.username = newUserName;
  }
  // password
  public getPassword(): string | undefined {
    return this.password;
  }

  public setPassword(newPassword: string): void {
    this.password = newPassword;
  }

  // cars
  public getCars(): Array<ICar> {
    return this.cars;
  }

  public setCars(newCars: Array<ICar> | ICar): void {
    if (Array.isArray(newCars)) {
      this.cars = newCars;
    } else {
      this.cars.push(newCars);
    }
  }
}
