import {Component, OnInit} from '@angular/core';
import {PlanetQuery} from "../../../store/planet";
import {Observable} from "rxjs";

@Component({
  selector: 'app-planet-grid',
  templateUrl: './planet-grid.component.html',
  styleUrls: ['./planet-grid.component.css'],
})
export class PlanetGridComponent implements OnInit {
  gridDensity: Array<number> = Array.from(Array(70).keys());
  generatedColor!: string;
  hitElements$: Observable<Array<number>> = this.planetQuery.hitElements;

  constructor(private planetQuery: PlanetQuery) { }

  ngOnInit(): void {
  }
}
