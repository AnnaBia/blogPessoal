import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  // INSTÂNCIAS
  tema: Tema= new Tema()
  listaTemas: Tema[]

  constructor(
    // DEPENDÊNCIAS
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == '') {// se o token estiver vazio
      alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/entrar']) // envia para tela entrar
    }
    this.findAllTemas() // apresenta a lista de temas automaticamente
  }
 // procure todos os temas
  findAllTemas(){
    // acessa o tema service, pega o método getAll e retorna uma lista de temas
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp // chama a lista
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{// subscribe: transforma o JSON em objeto TS
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas() // mostra a lista temas atualizada
      this.tema= new Tema() // limpa o campo de descrição automaticamente
    })
  }

}
