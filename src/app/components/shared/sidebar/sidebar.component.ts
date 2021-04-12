import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from './../../../cargar-scripts.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _CargaScripts: CargarScriptsService
  ) { 
    _CargaScripts.Carga(["funciones/tema"]);
  }

  ngOnInit(): void {
  }

}
