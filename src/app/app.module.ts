import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { DataService } from './data/data.service';
import { IDataService } from './data/data.interface';
import { ForceComponent } from './charts/force/force.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarchartComponent,
    ForceComponent,
    SelectionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FlexLayoutModule],
  providers: [{ provide: IDataService, useClass: DataService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
