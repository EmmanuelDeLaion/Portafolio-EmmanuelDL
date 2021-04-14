import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  myScritElementExperience: HTMLScriptElement;

  constructor() { 
    this.myScritElementExperience = document.createElement("script");
    this.myScritElementExperience.src = "/assets/js/funcionesaboutme.js";
    document.body.appendChild(this.myScritElementExperience);
  }

  ngOnInit(): void {
  }

}
