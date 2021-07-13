import { Order } from '../../Entidades/Order';
import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';


@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  @Output() orderCreated = new EventEmitter<Order>();//Envio la información al componente padre

  name: string = ""
  lastname: string=""
  phoneNumber: string=""
  email: string = ""

  inputName: string=""
  inputLastname: string=""
  inputPhonenumber: string=""
  inputEmail: string=""


/*
  guardarDatos(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
    this.lastname=(<HTMLInputElement>event.target).value;
    this.phoneNumber=(<HTMLInputElement>event.target).value;
    this.email=(<HTMLInputElement>event.target).value;
  }*/
  addClient(){
      let order = new Order(this.inputName,this.inputLastname,this.inputPhonenumber,this.inputEmail);
      //this.orders.push(order);//Esta alternativa es cuando el array lo creo localmente
      this.orderCreated.emit(order);//Envio la informacion de este componente al componente padre
  }

  constructor() { }

  ngOnInit(): void {
  }

}
