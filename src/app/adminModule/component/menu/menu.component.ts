import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //orders
  public orderCollapsed=true;
  public ProductCollapsed=true;
  public UsersCollapsed=true;

  constructor() { }

  ngOnInit(): void {
  }

}
