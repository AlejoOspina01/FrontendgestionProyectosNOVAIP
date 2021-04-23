import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

	url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

    getTareas(){
		return this.http.get(`${this.url}tarea`);
	}	

    getTareasByIdproyecto(idproyecto:any){
		return this.http.get(`${this.url}tarea/query?idproyecto=${idproyecto}`);
	}		

	getTareasById(id:any){
		return this.http.get(`${this.url}tarea/${id}`);
	}

	registrarTarea(tareaNew:any){
  		return this.http.post(`${this.url}tarea`,tareaNew);
  	}	

}
