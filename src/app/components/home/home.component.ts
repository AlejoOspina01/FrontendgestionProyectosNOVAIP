import { Component, OnInit } from '@angular/core';
import {ProyectoService} from '../../services/proyecto.service';
import {UsuarioService} from '../../services/usuario.service';
import {formatDate} from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	proyectos:any;
  usuarios:any;
  instance;
  proyectSel:any;
  myDate = new Date();

  constructor(private proyectoService:ProyectoService,private usuarioService:UsuarioService) { 

  	this.getProyectos();
    this.getUsuarios();
  }

  ngOnInit(): void {
  }

  getProyectos(){
  	this.proyectoService.getProyecto().subscribe(result=>{
  		this.proyectos = result;
  	});
  }

  getUsuarios(){
    this.usuarioService.getUsers().subscribe(result=>{
      this.usuarios = result;
    });
  }  

  abrirEditar(proyect:any){
    this.proyectSel = proyect;
  }


  registrarProyecto(nombre:any,alias:any,descripcion:any,fecha_inicio:any,fecha_fin:any,responsable:any){
      Swal.fire({
        title: 'Cargando...',
        allowOutsideClick: false,
      });
      Swal.showLoading();
      var proyectoData = {
        nombre:nombre,
        alias:alias,
        descripcion:descripcion,
        estado:true,
        eliminado:false,
        fecha_inicio:fecha_inicio,
        fecha_fin:fecha_fin,
        fecha_creacion:formatDate(new Date(), 'yyyy-MM-dd', 'en'),
        usuario_responsable:responsable
      };


    this.proyectoService.registrarProyecto(proyectoData).subscribe(result=>{
            Swal.fire({
              title: 'Exitoso!',
              text: 'Proyecto registrado exitosamente.',
              icon: 'success'
            });
            this.getProyectos();
    },(err)=>{
      console.log(err);
            Swal.fire({
              title: 'ERROR!',
              text: 'Error al registrar proyecto. error: ',
              icon: 'error'
            });
    });
  }

  updateProyecto(nombre:any,alias:any,descripcion:any,fecha_inicio:any,fecha_fin:any,responsable:any){
      Swal.fire({
        title: 'Cargando...',
        allowOutsideClick: false,
      });
      Swal.showLoading();
      var proyectoData = {
        id:this.proyectSel.id,
        nombre:nombre,
        alias:alias,
        descripcion:descripcion,
        fecha_inicio:fecha_inicio,
        fecha_fin:fecha_fin,
        fecha_actualizacion:formatDate(new Date(), 'yyyy-MM-dd', 'en'),
        usuario_responsable:responsable
      };


    this.proyectoService.registrarProyecto(proyectoData).subscribe(result=>{
            Swal.fire({
              title: 'Exitoso!',
              text: 'Proyecto actualizado exitosamente.',
              icon: 'success'
            });
            this.getProyectos();
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
