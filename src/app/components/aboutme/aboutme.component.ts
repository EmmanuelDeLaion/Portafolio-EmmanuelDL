import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  myElementScriptAboutme: HTMLScriptElement;

  constructor() { 
    this.myElementScriptAboutme = document.createElement("script");
    this.myElementScriptAboutme.src = "/assets/js/funcionesaboutme.js";
    document.body.appendChild(this.myElementScriptAboutme);
  }

  ngOnInit(): void {
  }

}
