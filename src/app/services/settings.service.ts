import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private elemento = document.querySelector('#theme');
  

  constructor() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css' ;
    this.elemento!.setAttribute('href',theme);
  }


  changeTheme(theme : string ){

    const url = `./assets/css/colors/${theme}.css`;

    localStorage.setItem('theme',url)
    this.elemento!.setAttribute('href',url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    
    const li = document.querySelectorAll('.selector');

    li.forEach(element => {

      element.classList.remove('working');
      const localtheme = localStorage.getItem('theme');
      const btnTheme = `./assets/css/colors/${element.getAttribute('data-theme')}.css` ;
      if (localtheme === btnTheme){
        console.log('dsdsf')
        element.classList.add('working')
      }
      
    });

  }

}
