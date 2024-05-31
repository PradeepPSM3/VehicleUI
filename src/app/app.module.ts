import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleManagentComponent } from './views/Vehicle-Management/vehicle-managent.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleDetailComponent } from './views/vehicle-detail/vehicle-detail.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    VehicleManagentComponent,
    VehicleDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,FormsModule,ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
