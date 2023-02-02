import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  url = '/api';
  constructor(private http: HttpClient) { };

  getTickets () {
    return this.http.get(this.url);
  }
  agregarTickets (ticket:ticket) {
    return this.http.post(this.url+'/add', ticket)
  }
  getCategorias () {
    return this.http.get(this.url+'/categorie');
  }
}
export interface ticket{
  nombre_completo?:string
  nombre_empresa?:string
  categoria?:number
  email?:string
  telefono?:string
  mensaje?:string
}
export interface categoria{
  categoria?:string
}
