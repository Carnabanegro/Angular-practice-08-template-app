import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  usuarios : any[] = [];
  columnas : any[] = [];

  constructor() { }

  ngOnInit(): void {

    const promise = new Promise(
      (resolve,reject)=>{

        if(false){
          resolve("HOLA MUNDO")
        }else{
          reject("HOLA MUNDO")
        }
        
      }
    )

    promise.then( () =>{
        console.log("Promesa Finalizada")
      } 
    ).catch( () =>{
      console.log("Error en promesa")
    })

    console.log("Fin init")
  }

  getUsuarios(){


    fetch('https://reqres.in/api/users')
      .then(
        (response) =>{
          response.json().then(body =>{
            this.usuarios = body.data;
            this.columnas = Object.keys(body.data[0])
            console.log(this.columnas);
          })
          
        }
      ) 
      .catch(
        err => console.log(err)
      )
  }


}
