import { Component } from '@angular/core';
import { Order } from './Entidades/Order';

@Component({
  selector: 'app-tienda',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miPrimeraApp';


  name: string = ""
  lastname: string = ""
  phoneNumber: string = ""
  email: string = ""

  inputName: string = ""
  inputLastname: string = ""
  inputPhonenumber: string = ""
  inputEmail: string = ""

  orders: Order[] = [new Order('nahuel', 'barbosa', '1123234343', 'probando@gmail.com')];


  guardarDatos(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
    this.lastname = (<HTMLInputElement>event.target).value;
    this.phoneNumber = (<HTMLInputElement>event.target).value;
    this.email = (<HTMLInputElement>event.target).value;
  }

  orderAdd(order: Order) {
    this.orders.push(order);//PUSH: guardar order en mi lista array orders
  }

  /*addClient(){
      let pedidos2 = new pedido(this.inputName,this.inputLastname,this.inputPhonenumber,this.inputEmail);
      this.pedidos.push(pedidos2);
  }*/

}
