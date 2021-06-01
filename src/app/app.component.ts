 import { LoadingService } from './services/loading.service';
 import { Component, OnInit } from '@angular/core';
 import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 
export class AppComponent   implements OnInit {
  title = 'portafolioemmanueldl';

  constructor(
    public _loadingService: LoadingService
  ){

  }

  ngOnInit() {

  }
  
}
