import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	dataUser= JSON.parse(localStorage.getItem('dataUser'));

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

    cerrarSesion(){
  	localStorage.removeItem("dataUser");
        this.router.navigate(['/']);
  }

}
