import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (environment.token == '') {// se o token estiver vazio
      alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/entrar']) // envia para tela entrar
    }
  }

}
