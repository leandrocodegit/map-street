import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipoCastro = "fisica";

  constructor() { }

  ngOnInit(): void {
  }

  verificaTipoFormulario(){
    console.log(this.tipoCastro)
  }

}
