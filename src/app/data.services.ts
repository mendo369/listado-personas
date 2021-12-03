import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()//indicamos que inyectaremos este servicio entro de otros aervicios
export class DataServices{
    constructor(private httpClient:HttpClient){}

    cargarPersonas():Observable<any>{
        return this.httpClient.get("https://listado-personas-401c7-default-rtdb.firebaseio.com/datos.json?");
    }

    guardarPersonas(personas:Persona[]){
        this.httpClient.put("https://listado-personas-401c7-default-rtdb.firebaseio.com/datos.json", personas).subscribe(
            response=>console.log('resultado de guardar personas' + response),
            error=>console.log('Error al guardar personas' + error)
            );
    }
    
    modificarPersona(index:number, persona:Persona){
        let url:string;
        url = 'https://listado-personas-401c7-default-rtdb.firebaseio.com/datos'+index+'.json';
        this.httpClient.put(url,persona).subscribe(
            response=>{console.log('Resultado de modificar persona'+response)},
            error=>{console.log('Error de actualizar persona'+error)}
        )
    }
    eliminarPersona(index:number){
        let url:string;
        url = 'https://listado-personas-401c7-default-rtdb.firebaseio.com/datos'+index+'.json';
        this.httpClient.delete(url).subscribe(
            response=>{console.log('Resultado de eliminar persona'+response)},
            error=>{console.log('Error de eliminar persona'+error)}
        )
    }
}