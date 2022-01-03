import { Component, EventEmitter, OnInit, Output} from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
@Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada= 'general';
  paisSeleccionado='us';

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencias'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'},
  ];
  paises: any[] = [
    {value: 'us', nombre: 'Estados Unidos'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'ie', nombre: 'Irlanda'},
    {value: 'pt', nombre: 'Portugal'},
    {value: 'gr', nombre: 'Grecia'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'cn', nombre: 'China'},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
