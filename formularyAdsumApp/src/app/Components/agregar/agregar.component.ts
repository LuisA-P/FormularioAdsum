import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ticket, TicketsService } from "../../services/tickets.service";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  ticket: ticket={
    nombre_completo:'',
    nombre_empresa:'',
    categoria:0,
    email:'',
    telefono:'',
    mensaje:''
  };

  constructor(private TicketsService:TicketsService, private router:Router) { }

  ngOnInit(): void {
    this.listarCategorias()
  }

  agregar() {
    this.TicketsService.agregarTickets(this.ticket).subscribe();
    this.router.navigate(['/inicio'])
  }
  listarCategorias () {
    this.TicketsService.getCategorias().subscribe(
      res=>{
        console.log(res);
        this.listarCategorias=<any>res;
        
      },
      err => console.log(err)
      
    )
  }
}
