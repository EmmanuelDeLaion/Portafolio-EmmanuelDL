import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public cargando: Boolean = false;

  constructor() { 

  }

  public set _cargando(cargando){
    this._cargando = cargando;
  }

  public get _cargando(){
    return this.cargando;
  }

}
