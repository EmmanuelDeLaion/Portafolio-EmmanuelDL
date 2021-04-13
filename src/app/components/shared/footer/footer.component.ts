import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent implements OnInit {

  myScriptElementFooter:HTMLScriptElement;

  constructor() { 

    this.myScriptElementFooter = document.createElement("script");
    this.myScriptElementFooter.src = "/assets/js/funcionesfooter.js";
    document.body.appendChild(this.myScriptElementFooter);

  }

  ngOnInit(): void {
  }

}
