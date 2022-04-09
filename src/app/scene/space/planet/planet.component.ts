import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planetItems: Array<number> = Array.from(Array(this.getRandomValue(200, 50)).keys());

  constructor() { }

  ngOnInit(): void {
  }

  getRandomValue(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
