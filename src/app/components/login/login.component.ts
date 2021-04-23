import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	usuarioBuscado:any;

  constructor(private usuarioService:UsuarioService,private router:Router) {
   }

  ngOnInit(): void {
  }


  iniciarSesion(email:any,contrasena:any){
  	  Swal.fire({
        title: 'Cargando...',
        allowOutsideClick: false,
      });
      Swal.showLoading();
  	this.usuarioService.getUserByEmail(email).subscribe(result=>{
  		this.usuarioBuscado = result;
	  	if(this.usuarioBuscado.length != 0){
	  		if(this.usuarioBuscado[0].contrasena == contrasena){
	  			Swal.close();
	  			this.usuarioBuscado[0].contrasena = "";
	  			localStorage.setItem("dataUser",JSON.stringify(this.usuarioBuscado[0]));
	  			setTimeout(() =>{
					this.router.navigate(['/home']);
				},500);	
	  		}else{
	          Swal.fire({
	            title: 'ERROR!',
	            text: 'Error contraseña invalida.',
	            icon: 'error'
	          });
	  		}
	  	}else{
  		  Swal.fire({
            title: 'ERROR!',
            text: 'Error, el usuario con email ' + email + ', no fue encontrado.',
            icon: 'error'
          });
	  	}
  	},(err)=>{
  		console.log(err);
  	});

  }

}
