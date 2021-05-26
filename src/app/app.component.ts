import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
declare function funciona():void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolioemmanueldl';

  public _loadingService: LoadingService;
  constructor(){

  }
}
