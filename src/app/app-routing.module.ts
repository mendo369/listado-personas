import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import {ErrorComponent} from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes=[
  {path: '', component: PersonasComponent},
  {path: 'personas', component: PersonasComponent,children: [
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent},
  ]},
  {path:'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
