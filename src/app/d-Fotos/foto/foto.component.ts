import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime, filter } from "rxjs/operators";
import { PexelPhotoService } from "src/app/services/pexel-photo.service";
import { dataType } from "./data";
import { img } from "./img";


@Component({
    selector: 'd-foto',
    templateUrl: 'foto.component.html',
    styleUrls: ['./foto.component.css']

})

export class FotoComponent implements OnChanges, OnDestroy{
title = 'Fotos'

@Input() filter = ''
Pesquisa: String;
per_Page: Number
data: img[];
indice: number
desc: string[] = [];
tratamento:string;
debounce: Subject<string> = new Subject<string>();




constructor(
  private pexelService:PexelPhotoService,
  private actvatedRoute:ActivatedRoute){
  this.pexelService.getData(this.Pesquisa,this.per_Page)
  this.debounce
  .pipe(debounceTime(300))
  .subscribe(filter=>this.filter = filter)
  
}
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
    throw new Error("Method not implemented.");
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

pagination (){
  if (this.per_Page == 50){
    
      this.per_Page = 30

    }else if ( this.per_Page == 30) {
    
      this.per_Page == 50
  
  }
  
  
  

}


searchPhotos(){
 
  //Recuperando os dados

      this.per_Page = 30
      this.pexelService
  

          .getData(this.Pesquisa,this.per_Page)

          .subscribe((data:dataType)=> {
        
          this.data = data.photos
        
          this.indice = this.data.length    

  //encapsulamento dos dados de pesquisa em um array

          for (let i = 0; i < this.indice; i++) {

            this.desc.push(this.data[i].alt)
            
          }

          console.log(this.desc)
          
      }, 
      (error) =>{
      console.log(error)
      })
      
    }

    
}


//import do ecmascript 6


//Serviço de rotas para pesquisa bem começado metade feito

/*--------------Adiçao de parâmetros de rotas-----------
Add parâmetro de pesquisa no mapa de rotas para acessar usuários específicos
private actvatedrout:ActivatedRoute
const Pesquisa = this.actvatedrout.snapshot.params.Pesquisa







--------------------------------------------------------*/


/*-----------------------------------------Se necessário Onchanges !----------------------------------------------------

ngOnChanges(changes: SimpleChanges): {
  if(changes.data)

}
// Agrupamento de colunas

agrup(){
  const newRows= [];
  for(let index =0; index < this.data.length; index +=3){
    newRows.push(this.data.splice(index,index +3))
  }
  return newRows
}

}

----------------------------------------EVENTO---------------------------------------------------------

A requisição de eventos do angular vem da página para o compnemte
Sob a notação (evento).

Para recuperar uma varíável:

(Evento) = "Propriedade = $event (Notação de seleção do evento).target (Seleção).value (atributo)"

---------------------------------------------------------------------------------------------------------------*/