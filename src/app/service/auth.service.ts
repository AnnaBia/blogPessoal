import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  
  // MÉTODOS
  entrar(userLogin: UserLogin): Observable<UserLogin>{ 
    return this.http.post<UserLogin>('https://genblogpessoalespejo.herokuapp.com/usuarios/logar',userLogin) // conforme o controller criado no back
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://genblogpessoalespejo.herokuapp.com/usuarios/cadastrar',user) 

  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://genblogpessoalespejo.herokuapp.com/usuarios/${id}`)
  }

  logado(){ 
    let ok: boolean = false // variável booleana

    if(environment.token != ''){
      ok = true
    }
    return ok
  }
}
