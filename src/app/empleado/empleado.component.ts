import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  // ///nombre = 'jefferson';
  // apellido = 'izquierdo';
  // edad = 20;

  llamaEmpresa(vaiue:String, value2:String, value3:Number) {
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
