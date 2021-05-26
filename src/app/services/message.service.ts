import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MessageService {

  constructor(
    private _http: HttpClient
  ) { 
    
  }

  sendMessage(body){
    return this._http.post('https://contacto-nodejs-nodemailer.herokuapp.com/formulario', body);
  }

}
