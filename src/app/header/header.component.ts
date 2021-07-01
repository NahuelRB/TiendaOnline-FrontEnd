import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private title: string = "Aca va el título";
 disable: boolean = false;

  getTitle():string{
    return this.title;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
