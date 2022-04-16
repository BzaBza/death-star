import {Query} from '@datorama/akita';
import {ElementState, PlanetState, PlanetStore} from "./planet.store";
import {filter, map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ElementStatusEnum} from "./ElementStatus.enum";

@Injectable({ providedIn: "root" })
export class PlanetQuery extends Query<PlanetState> {
  selectElements$ = this.select('elements');

  constructor(protected override store: PlanetStore) {
    super(store);
  }

  get elements(): Observable<Array<ElementState>> {
    return this.selectElements$;
  }

  get hitElements(): Observable<Array<number>> {
    return this.selectElements$.pipe(
      map((elements: Array<ElementState>) => {
        return elements.filter(el => el.status === ElementStatusEnum.Hit).map(el => el.id)
      })
    );
  }
}
