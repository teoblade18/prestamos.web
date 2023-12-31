import { Injectable } from "@angular/core";
import { PrestamistaI } from "src/app/Models/PrestamistaI";
import { ResponseI } from "src/app/Models/Response.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsuarioI } from "src/app/Models/UsuarioI";

@Injectable({
  providedIn: 'root'
})

export class ApiService{

  url: string = "http://localhost:5032/"

  constructor(private http:HttpClient){  }

  consultarPrestamista(form : UsuarioI): Observable<ResponseI>{
    let direccion = this.url + "api/Prestamista/ConsultarXUsuario"

    return this.http.post<ResponseI>(direccion, form);
  }

  registrarPrestamista(form : PrestamistaI): Observable<ResponseI>{

    let direccion = this.url + "api/Prestamista/Guardar";

    return this.http.post<ResponseI>(direccion, form);
  }

}
