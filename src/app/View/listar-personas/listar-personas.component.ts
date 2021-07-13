
import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/Entidades/Order';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

  @Input() order: Order;
  @Input() indice: number;

  orders:Order[] = [new Order('nahuel','barbosa','1123234343','probando@gmail.com')];


  constructor() { }

  ngOnInit(): void {
  }

}
