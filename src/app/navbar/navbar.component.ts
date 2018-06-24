import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(e){
    switch(e.target.text.toLowerCase()){
      case 'register':
        console.log("register");
      break;
      case 'login':
        console.log("login");
      break;
      default:
      break;
    }
  }

}
