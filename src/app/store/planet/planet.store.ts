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
