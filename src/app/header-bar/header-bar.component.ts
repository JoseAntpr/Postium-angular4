import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent { 

  constructor(private _router: Router){}

  goToPostsSearch(query: String): void {
    let extras: NavigationExtras = { queryParams:{ q: query } };
    this._router.navigate(['search'], extras);  
  }
}
