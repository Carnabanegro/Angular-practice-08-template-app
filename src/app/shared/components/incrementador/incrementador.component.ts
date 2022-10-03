import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent  {
  
  @Output() onChange : EventEmitter<number> = new EventEmitter();
  @Input() progreso: number = 10;
  @Input() btnClass : string = 'btn btn-primary';

  cambiarProgreso(valor: number):void{

    if (valor>=0 && this.progreso >=100){
      this.progreso = 100;
      this.onChange.emit(100)
      return;
      
    }

    if (valor<0 && this.progreso <=0){
      this.progreso = 0;
      this.onChange.emit(0)
      return;
    }

    this.progreso = this.progreso + valor ;
    this.onChange.emit(this.progreso)
  
  }

  cambiar(valor : number){

    if (valor > 100){
      this.progreso = 100;
    }else if(valor <0) {
      this.progreso = 0
    }else{
      this.progreso = valor;
    }
    this.onChange.emit(this.progreso);
  }

}
