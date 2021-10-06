import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  // instanciar
  tema: Tema= new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == '') {// se o token estiver vazio
      alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/entrar']) // envia para tela entrar
    }
    this.findAllTemas() // faz os temas aparecerem automaticamente na lista
  }
 // procure todos os temas
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso')
      this.findAllTemas() // mostra a lista temas atualizada
      this.tema= new Tema() 
    })
  }

}
