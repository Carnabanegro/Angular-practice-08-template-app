import { Component, DoCheck, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit,DoCheck {


  constructor(private settings : SettingsService) { }

  ngDoCheck(): void {
    this.settings.checkCurrentTheme();
  }

  ngOnInit(): void {
    this.settings.checkCurrentTheme();
  }

  

  changeTheme(theme : string ){
    this.settings.changeTheme(theme)
  }

  

}
