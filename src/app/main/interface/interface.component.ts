import { Component, OnInit } from '@angular/core';
import {NavigationEnum} from "./navigation.enum";

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  navigationEnum = NavigationEnum;
  navigationState!: NavigationEnum;
  constructor() { }

  ngOnInit(): void {
  }

}
