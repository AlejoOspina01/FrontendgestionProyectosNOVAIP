import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

    getUsers(){
		return this.http.get(`${this.url}usuario`);
	}	
    getUserByEmail(email:any){
		return this.http.get(`${this.url}usuario/query?email=${email}`);
	}		
}
