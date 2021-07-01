import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  name: string = ""
  lastname: string=""
  phoneNumber: string=""
  email: string = ""

  guardarDatos(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
    this.lastname=(<HTMLInputElement>event.target).value;
    this.phoneNumber=(<HTMLInputElement>event.target).value;
    this.email=(<HTMLInputElement>event.target).value;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
