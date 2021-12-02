//import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms'
//import { LoggingService } from '../../LoggingService.Service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  }) 
export class FormularioComponent implements OnInit{

  //@Output() personaCreada= new EventEmitter <Persona>();

  nombreInput:string= '';
  apellidoInput:string='';
  index:number;
  modoEdicion:number;

  constructor( private personasService:PersonasService, private router:Router, private route:ActivatedRoute){
      this.personasService.saludar.subscribe(
        (indice:number)=>alert("el indice es "+indice)
      );
  }
  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];//se agrega el + delante de la sentencia para que se transforme el string a number
    if(this.modoEdicion!=null && this.modoEdicion===1){
      let persona:Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput=persona.nombre;
      this.apellidoInput=persona.apellido;
    }
  }

  onGuardarPersona(){
    let persona1=new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviarMensajeAConsola("enviamos persona "+ persona1.nombre + persona1.apellido);
    //this.personaCreada.emit(persona1);
    if (this.modoEdicion!=null && this.modoEdicion===1) {
      this.personasService.modificarPersona(this.index, persona1);
    }else{
      this.personasService.personaAgregada(persona1);
    }
    this.router.navigate(['personas']);
  }
  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}