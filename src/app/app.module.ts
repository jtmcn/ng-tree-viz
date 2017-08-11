import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { DataService } from './data/data.service';
import { IDataService } from './types/data.interface';

@NgModule({
  declarations: [AppComponent, HomeComponent, BarchartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpModule],
  providers: [{ provide: IDataService, useClass: DataService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
