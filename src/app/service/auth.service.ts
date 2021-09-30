import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    private http: HttpClient
  ) {}
  
  // MÉTODOS
  entrar(userLogin: UserLogin): Observable<UserLogin>{ 
    return this.http.post<UserLogin>('https://genblogpessoalespejo.herokuapp.com/usuarios/logar',userLogin) // conforme o controller criado no back
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://genblogpessoalespejo.herokuapp.com/usuarios/cadastrar',user) 

  }
}
