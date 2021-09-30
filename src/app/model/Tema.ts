import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao: string
    public postagem: Postagem[] // relacionamento
                        // [] indica que é um array, @manytomany
}