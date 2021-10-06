import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  // instanciar
  tema: Tema= new Tema()
  listaTemas: Tema[]
  constructor(private http: HttpClient) { }
  
  // objeto
  token = { 
    // este token pode ser colocado direto no método abaixo no lugar de'this.token'
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  // operações
  // método que trás todos os temas[]
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://genblogpessoalespejo.herokuapp.com/tema', this.token)
  }

  postTema(tema: Tema):Observable<Tema>{
    return this.http.post<Tema>('https://genblogpessoalespejo.herokuapp.com/tema', tema,this.token)
  }
}
