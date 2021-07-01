import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { HeaderComponent } from './header/header.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    HeaderComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//Es para utilizar two-binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
