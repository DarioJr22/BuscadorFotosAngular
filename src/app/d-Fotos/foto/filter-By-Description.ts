import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
import { img } from "./img";

@Pipe({name: 'filterByDescription'})
export class filterByDescription implements PipeTransform{


    transform(data: img[], query :string) {
        //Fonte de dados + o elemento html que quero me basear para filtrar
        query = query
        //Aplicação da transformação da variável, deixando sem espaço com trim() e minúscula com toLowerCase
        .trim()
        .toLowerCase()
        

    if (query) {
         return data
         //chamar dados para equação
         .filter(data => data
            //Ultilização da função Filter, Usada uma 'Arrow Function' para retornar valores de filter,
            //Que são valores minusculos e sem espaço
            .alt
            .trim()
            .toLocaleLowerCase()
            .includes(query))

            /*O includes()método retorna true se uma string contém uma string especificada.

                Caso contrário, ele retorna false.

                O includes()método diferencia maiúsculas de minúsculas.

            */
        
    } else {
        return data;
    }

 }

}