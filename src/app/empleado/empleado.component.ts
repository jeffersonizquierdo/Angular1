import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = 'jefferson';
  apellido = 'izquierdo';
  edad = 20;


  habilitacion = true;

  validarRegistro = false;

  textoRegistro= 'No hay usuario registrado';

  usuarioRegistrado = false;

  cambiarCheck(){

    this.habilitacion=!this.habilitacion;
  }

  registroUsuario(event: Event){

    alert(event.target)
    
  }

  getUsuarioRegistrado (){

    this.usuarioRegistrado = false;

  }

  setUsuarioRegistrado(event:Event ){

    if ((<HTMLInputElement>event.target).value =='si' ) {

      this.textoRegistro = 'El usuario se ha registrado con exito';
    } else {

      this.textoRegistro= 'No hay usuario registrado';
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
