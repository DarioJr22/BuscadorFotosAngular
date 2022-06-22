import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto/foto.component";
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotoFormComponent } from './foto-form/foto-form.component';

import { CommonModule } from "@angular/common";
import { ExibImgComponent } from './foto/exib-img/exib-img.component';
import { filterByDescription } from "./foto/filter-By-Description";


@NgModule({
    declarations: [
      FotoComponent, 
      FotoListComponent, 
      FotoFormComponent, 
      ExibImgComponent, 
      filterByDescription],
    exports:[FotoComponent],
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule
      ]
})


export class FotoModulo{}