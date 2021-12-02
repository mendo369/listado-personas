import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()//se advierte que usaremos un sevicio dentro de otro servicio
export class PersonasService{
    personas:Persona[]=[];
    saludar = new EventEmitter<number>();
    constructor(private loggingService:LoggingService, private dataService:DataServices){}
    
    setPersonas(personas:Persona[]){
      this.personas=personas;
    }
    obtenerPersonas(){
      return this.dataService.cargarPersonas();
    }

    personaAgregada(persona:Persona){
        this.loggingService.enviarMensajeAConsola("Agregamos persona "+persona.nombre+" "+persona.apellido);
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    }
    encontrarPersona(index:number){
      let persona:Persona = this.personas[index];
      return persona;
    }
    modificarPersona(index:number, persona:Persona){
      let persona1 = this.personas[index];
      persona1.nombre = persona.nombre;
      persona1.apellido = persona.apellido;
    }
    eliminarPersona(index:number){
      this.personas.splice(index,1);
    }
}