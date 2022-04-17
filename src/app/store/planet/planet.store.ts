import { Store, StoreConfig } from '@datorama/akita';
import {Injectable} from "@angular/core";
import {ElementStatusEnum} from "./ElementStatus.enum";

export interface ElementState {
  id: number;
  status: string;
}

export interface PlanetConfig {
  color: string;
}

export interface PlanetState {
  elements: Array<ElementState>;
  planetConfig: PlanetConfig;
}

export function createInitialState(): PlanetState {
  return {
    elements: [
      {id: 0, status: ElementStatusEnum.Hit},
      {id: 14, status: ElementStatusEnum.Hit},
      {id: 24, status: ElementStatusEnum.Hit},
      {id: 4, status: ElementStatusEnum.Hit},
      {id: 45, status: ElementStatusEnum.Hit},
      {id: 65, status: ElementStatusEnum.Hit},
      {id: 15, status: ElementStatusEnum.Hit},
      {id: 25, status: ElementStatusEnum.Hit},
      {id: 35, status: ElementStatusEnum.Hit},
      {id: 55, status: ElementStatusEnum.Hit},
      {id: 13, status: ElementStatusEnum.Hit},
      {id: 15, status: ElementStatusEnum.Hit},
      {id: 16, status: ElementStatusEnum.Hit},
      {id: 17, status: ElementStatusEnum.Hit},
      {id: 18, status: ElementStatusEnum.Hit},
      {id: 28, status: ElementStatusEnum.Hit},
      {id: 46, status: ElementStatusEnum.Hit},
    ],
    planetConfig: {
      color: ''
    }
  };
}

@StoreConfig({ name: 'planet' })
@Injectable({ providedIn: "root" })
export class PlanetStore extends Store<PlanetState> {
  constructor() {
    super(createInitialState());
  }
}
