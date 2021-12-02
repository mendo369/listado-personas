import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';

@Injectable()//indicamos que inyectaremos este servicio entro de otros aervicios
export class DataServices{
    constructor(private httpClient:HttpClient){}

    cargarPersonas():Observable<any>{
        return this.httpClient.get("https://listado-personas-401c7-default-rtdb.firebaseio.com/datos.json");
    }

    guardarPersonas(personas:Persona[]){
        this.httpClient.put("https://listado-personas-401c7-default-rtdb.firebaseio.com/datos.json", personas).subscribe(
            response=>console.log('resultado de guardar personas' + response),
            error=>console.log('Error al guardar personas' + error)
            );
    }
    
}