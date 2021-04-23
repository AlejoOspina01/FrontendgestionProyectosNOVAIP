import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ListarComponent} from './components/usuario/listar/listar.component';
import {VerproyectoComponent} from './components/proyecto/verproyecto/verproyecto.component';

const routes: Routes = [

	{path:'verproyecto/:id',component: VerproyectoComponent},
	{path:'home',component: HomeComponent},
	{path:'listarUser',component: ListarComponent},
	{path:'',component:  LoginComponent},
	{path:'**',component:  LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
