import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  categoriaSeleccionada= 'general';
  paisSeleccionado='esp';

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
  ];
  paises: any[] = [
    {value: 'esp', nombre: 'España'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'pt', nombre: 'Portugues'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
