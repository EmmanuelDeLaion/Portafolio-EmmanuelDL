import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  documentJavaScript: HTMLScriptElement;

  constructor(
  ) {
    this.documentJavaScript = document.createElement("script");
    this.documentJavaScript.src = "/assets/js/enlacesScroll.js";
    document.body.appendChild(this.documentJavaScript);
  }

  ngOnInit(): void {
  }

}
