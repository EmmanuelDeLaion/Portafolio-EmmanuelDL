import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myScriptElement: HTMLScriptElement;

  constructor(
  ) {

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "/assets/js/funciones.js";
    document.body.appendChild(this.myScriptElement);

  }

  ngOnInit(): void {

  }



}
