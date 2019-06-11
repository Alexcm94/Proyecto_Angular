import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  light = true;
  constructor() { }

  ngOnInit() {

  }
  setDark(){
    this.light = false;
  }
  setLight(){
    this.light = true;
  }

}
