import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.Service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  })
export class FormularioComponent {

  //@Output() personaCreada= new EventEmitter <Persona>();

  nombreInput:string= '';
  apellidoInput:string='';

  //@ViewChild('nombreInput') nombreInput: ElementRef;//(nombreInput)-->nombre de la referencia local | nombreInput --> nombre del atributo
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService:LoggingService, private personasService:PersonasService){

      this.personasService.saludar.subscribe(
        (indice:number)=>alert("el indice es "+indice)
      );

  }

  agregarPersona(){
    let persona1=new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviarMensajeAConsola("enviamos persona "+ persona1.nombre + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.personaAgregada(persona1)
  }
}
