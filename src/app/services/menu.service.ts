import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu : any[] = [
    {
      titulo: 'Dashboard' , 
      icono: ' mdi mdi-gauge',
      submenu: [
        {titulo: 'Main' , url: '/'},
        {titulo: 'Graficos' , url: './grafica'},
        {titulo: 'Progress bar' , url: './progress'},
        {titulo: 'Promises' , url: './promises'},
        {titulo: 'Rxjs' , url: './rxjs'}
      ]

    }
  ]

  constructor() { }
}
