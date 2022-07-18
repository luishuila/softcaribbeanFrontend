import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  createRouter=[
    // {url:"product",name:"Guardar Productos"},
    {url:"customerlist",name:"Lista Customer"},
    {url:"",name:"árbol binario"}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
