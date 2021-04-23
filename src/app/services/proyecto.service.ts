import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

	url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

    getProyecto(){
		return this.http.get(`${this.url}proyecto`);
	}	

	getProyectoById(id:any){
		return this.http.get(`${this.url}proyecto/${id}`);
	}

	registrarProyecto(proyectoNew:any){
  		return this.http.post(`${this.url}proyecto`,proyectoNew);
  	}	

}
