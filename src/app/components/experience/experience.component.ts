import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {


  scriptElementDesigns: HTMLScriptElement;

  constructor() { 
    this.scriptElementDesigns = document.createElement('script');
    this.scriptElementDesigns.src = "/assets/js/tabs-designs.js";
    document.body.appendChild(this.scriptElementDesigns);   
  }

  ngOnInit(): void {
  }

}
