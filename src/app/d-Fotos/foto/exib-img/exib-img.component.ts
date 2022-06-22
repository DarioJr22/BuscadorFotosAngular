import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { img } from '../img';

@Component({
  selector: 'app-exib-img',
  templateUrl: './exib-img.component.html',
  styleUrls: ['./exib-img.component.css']
})
export class ExibImgComponent implements OnChanges {

  @Input() data : img[] = [];
  rows: any[] = []
  
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data)
    this.rows = this.groupColumns(this.data)
  }

  groupColumns(data:img[]){
    const newRows = [];
    for (let index = 0; index < data.length; index+=3) {
      newRows.push(data.slice(index,index +3))
      
    }
    console.log(newRows);
    
    return newRows


  }
}
