import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // INSTANCIAS
  constructor(
    public auth: AuthService // criado p/poder acessar o auth.service no app.component.html
  ){}
}
