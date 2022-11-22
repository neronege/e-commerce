import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgImageSliderModule } from 'ng-image-slider';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './backendservice';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FormsModule } from '@angular/forms';
import { ProductdetailnewComponent } from './productdetailnew/productdetailnew.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductsComponent,
    ProductdetailComponent,
    ProductdetailnewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    NgImageSliderModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
