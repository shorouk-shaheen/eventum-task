import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkTheme : boolean;

  constructor() {
    this.isDarkTheme = false
   }

  ngOnInit(): void {
    document.getElementById("mySidenav").style.width = "0";
    // var inputHref = 
    (<HTMLInputElement>document.getElementById('themeAsset')).getAttribute("href");
  }

   openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("mySidenav").style.left = "0";
    
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  darkTheme() {
    var a = document.getElementById('themeAsset');
    a.setAttribute('href', './assets/css/darkTheme.css');
  }

  lightTheme() {
    var a = document.getElementById('themeAsset');
    a.setAttribute('href', './assets/css/lightTheme.css');
  }
        

    // if (this.isDarkTheme) {
    //    this.isDarkTheme = false;
    // } else {
    //    this.isDarkTheme = true;
    // }
//  }

}
