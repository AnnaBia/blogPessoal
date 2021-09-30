import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  // INSTÂNCIAS não podem ter o mesmo nome dos métodos
  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  // MÉTODOS
  constructor(
    // INJEÇÃO DE DEPENDÊNCIA  tudo que estiver dentro do contrutor
    private authService: AuthService, // diz que o módulo de cadastrar depende desse módulo Service p/ fazer o cadastro
    private router: Router
    ) { }

  ngOnInit() /*: void*/ {
    window.scroll(0, 0) // eixo x e y = 0 (o cursor na página web fica no canto supertior a esquerda)  
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value // o valor que tiver aqui, ele coloca na senha
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas!')
    } else {
      // caso contrário o usuário preenchido deve ser enviado ao servidor
                                             //.subscribe - tranforma um objeto(ts) em json p/ q o servidor entenda a requisição
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar']) // rota interna no typeScript(ts)
        alert('Usuário cadastrado com sucesso!') //alert - mensagem de erro
      }) 
    }                                     
  }
}
