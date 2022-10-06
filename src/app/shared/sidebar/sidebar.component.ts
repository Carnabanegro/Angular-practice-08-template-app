import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems! : any[] ;
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.menu;
    console.log(this.menuItems)
  }

}
