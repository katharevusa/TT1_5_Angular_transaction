import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TutorialsListComponent } from "./components/tutorials-list/tutorials-list.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, TutorialsListComponent, ProductListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NoopAnimationsModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
