//import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'
//import { LoggingService } from '../../LoggingService.Service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  }) 
export class FormularioComponent {

  //@Output() personaCreada= new EventEmitter <Persona>();

  nombreInput:string= '';
  apellidoInput:string='';

  

  constructor( private personasService:PersonasService, private router:Router){

      this.personasService.saludar.subscribe(
        (indice:number)=>alert("el indice es "+indice)
      );

  }

  onGuardarPersona(){
    
    let persona1=new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviarMensajeAConsola("enviamos persona "+ persona1.nombre + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.personaAgregada(persona1);
    this.router.navigate(['personas'])
  }
}
