import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { DepartmentComponent } from './department/department.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent,
    MainComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    MatSliderModule,
    MatExpansionModule,
    BrowserAnimationsModule

       ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
