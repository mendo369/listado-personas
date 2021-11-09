import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.Service";
import { Persona } from "./persona.model";

@Injectable()//se advierte que usaremos un sevicio dentro de otro servicio
export class PersonasService{
    personas:Persona[]=[new Persona("naruto","uzumaky"), new Persona("john","weck"), new Persona('henry','ford')]

    saludar = new EventEmitter<number>();
    constructor(private loggingService:LoggingService){}

    personaAgregada(persona:Persona){
        this.loggingService.enviarMensajeAConsola("Agregamos persona "+persona.nombre+" "+persona.apellido);
        this.personas.push(persona);
      }
}