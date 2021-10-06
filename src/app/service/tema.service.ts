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
  tema: Tema = new Tema()
  listaTemas: Tema[]
  constructor(private http: HttpClient) { }

  // objeto
  token = {
    // este token pode ser colocado direto no método abaixo no lugar de'this.token'
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  // operações
  // método que trás todos os temas[]
  getAllTema(): Observable<Tema[]> { // se ele vai trazer uma lista, é necessario [] array
    return this.http.get<Tema[]>('https://genblogpessoalespejo.herokuapp.com/tema', this.token)
    //nesse http eu quero o método get q tem q observar o objeto tema
  }
  // método que puxa informação através do Id
  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://genblogpessoalespejo.herokuapp.com/tema/${id}`, this.token) // `` : usamos crase quando tem um parâmetro no método
  }
  // método que puxa informação
  postTema(tema: Tema): Observable<Tema> { // esse observable pega um tema de cada vez, por isso não tem []
    return this.http.post<Tema>('https://genblogpessoalespejo.herokuapp.com/tema', tema, this.token)
  }
  // método que altera informação 
  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://genblogpessoalespejo.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://genblogpessoalespejo.herokuapp.com/tema/${id}`, this.token)// (${}) - chama parâmetro
  }


}
