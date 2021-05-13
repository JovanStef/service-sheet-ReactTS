import { v4 as uuidv4 } from "uuid";

export interface ICar {
  id: string | number;
  model?: string | undefined;
  licensePlates: string;
  images: {
    logoURL?: string | undefined;
    carURL?: string | undefined;
  };
  userID: string;
}

export class Car implements ICar {
  id: string | number;
  model?: string | undefined;
  licensePlates: string;
  images: {
    logoURL?: string | undefined;
    carURL?: string | undefined;
  };
  userID: string;
  constructor(
    licensePlates: string,
    images: {
      logoURL?: string | undefined;
      carURL?: string | undefined;
    },
    userID: string,
    model?: string | undefined
  ) {
    this.id = uuidv4();
    this.model = model;
    this.licensePlates = licensePlates;
    this.images = images;
    this.userID = userID;
  }
}
