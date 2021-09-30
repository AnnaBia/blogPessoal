import { Postagem } from "./Postagem";

export class User { //exporta todos atributos no eclipse
    public id: number
    public nome: String
    public usuario: string
    public senha: string
    public dataNascimento: Date;
    public foto: string
    public tipo: string
    public postagem: Postagem
}