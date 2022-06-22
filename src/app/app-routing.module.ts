import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FotoListComponent } from './d-Fotos/foto-list/foto-list.component';
import { FotoComponent } from './d-Fotos/foto/foto.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
      {
        path: 'PesquisarFotos/:Pesquisa', 
        component: FotoComponent
      },
      {
        path: 'ListaFotos', 
        component: FotoListComponent
      },
      {
        path: '**', 
        component: NotFoundComponent
      }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
