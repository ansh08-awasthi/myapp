import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: AppRoutingModule = [
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
