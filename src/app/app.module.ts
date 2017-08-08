import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { routing, appRoutingProviders } from "./app.routes";
import { BarchartComponent } from './charts/barchart/barchart.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BarchartComponent],
  imports: [BrowserModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
