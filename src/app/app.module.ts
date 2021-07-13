import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './View/header/header.component';
import { ContactenosComponent } from './View/contactenos/contactenos.component';
import { FormsModule } from '@angular/forms';
import { ListarPersonasComponent } from './View/listar-personas/listar-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactenosComponent,
    ListarPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//Es para utilizar two-binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
