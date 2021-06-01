import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from './shared/material.module';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,  
    FormsModule, 
    BrowserAnimationsModule // Browser Animation, Must for pop-up menu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
