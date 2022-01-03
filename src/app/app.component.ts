import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud_app';

  listNoticias: any[] = [];
  loading = false;


  constructor(private _noticiaService: NoticiaService){

  }

   buscarNoticias(parametros:any): void{
     this.loading = true;
     this.listNoticias=[];
     console.log('soy el padre');
     console.log(parametros);
     this._noticiaService.getNoticias(parametros).subscribe(data =>{
      this.loading =false;
      this.listNoticias = data.data;
     }, error=>{
       console.log(error);
       this.loading =false;
     })
   }
  }

