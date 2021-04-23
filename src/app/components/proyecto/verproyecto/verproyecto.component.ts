import { Component, OnInit } from '@angular/core';
import {ProyectoService} from '../../../services/proyecto.service';
import {TareaService} from '../../../services/tarea.service';
import {UsuarioService} from '../../../services/usuario.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {formatDate} from '@angular/common';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-verproyecto',
  templateUrl: './verproyecto.component.html',
  styleUrls: ['./verproyecto.component.css']
})
export class VerproyectoComponent implements OnInit {

	idproyecto:any;
	proyectoBuscado:any;
	tareasproyecto:any;
	usuarios:any;

  constructor(private proyectoService:ProyectoService,private tareaService:TareaService,private usuarioService:UsuarioService,
  	private rutaActiva: ActivatedRoute) {
  	this.idproyecto = this.rutaActiva.snapshot.params.id;
  	this.getProyectoById();
  	this.getUsuarios();
  	this.getTareasById();

   }

  ngOnInit(): void {
  }

  getProyectoById(){
  	this.proyectoService.getProyectoById(this.idproyecto).subscribe(result=>{
  		this.proyectoBuscado = result;
  	});
  }

  getTareasById(){
  	this.tareaService.getTareasByIdproyecto(this.idproyecto).subscribe(result=>{
  		this.tareasproyecto = result;
  	});
  }  

    getUsuarios(){
    this.usuarioService.getUsers().subscribe(result=>{
      this.usuarios = result;
    });
  }  


    registrarTarea(nombre:any,alias:any,descripcion:any,fecha_inicio:any,responsable:any){
      Swal.fire({
        title: 'Cargando...',
        allowOutsideClick: false,
      });
      Swal.showLoading();
      var tareaData = {
        nombre:nombre,
        alias:alias,
        descripcion:descripcion,
        estado:true,
        eliminado:false,
        fecha_inicio:fecha_inicio,
        fecha_creacion:formatDate(new Date(), 'yyyy-MM-dd', 'en'),
        idproyecto:this.proyectoBuscado.id,
        idusuarioasignado:responsable
      };


    this.tareaService.registrarTarea(tareaData).subscribe(result=>{
            Swal.fire({
              title: 'Exitoso!',
              text: 'Tarea registrada exitosamente.',
              icon: 'success'
            });
            this.getTareasById();
    },(err)=>{
      console.log(err);
            Swal.fire({
              title: 'ERROR!',
              text: 'Error al registrar proyecto. error: ',
              icon: 'error'
            });
    });
  }

}
