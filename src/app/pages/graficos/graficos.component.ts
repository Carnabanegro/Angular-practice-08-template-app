import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class Grafica1Component {


  
  tortaData1 : number[]= [350, 450, 100];
  tortaData2 : number[]= [50, 150, 120]
  tortaLabel1: string[] = [ 'Ventas locales', 'Ventas internacionales', 'Ventas sin cobrar' ];
  tortaLabel2: string[] = [ 'Compras locales', 'Compras internacionales', 'Compras adeudadas' ]
}
