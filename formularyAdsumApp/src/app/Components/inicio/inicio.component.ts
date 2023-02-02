import { Component, OnInit } from '@angular/core';
import { ticket, TicketsService } from "../../services/tickets.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaTickets: ticket[];
  constructor(private TicketsService:TicketsService)  { }

  ngOnInit(): void {
    this.listarTickets ()
  }
  listarTickets () {
    this.TicketsService.getTickets().subscribe(
      res=>{
        console.log(res);
        this.listarTickets=<any>res;
        
      },
      err => console.log(err)
      
    )
  }
}
