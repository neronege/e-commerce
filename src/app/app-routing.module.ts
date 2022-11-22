import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductdetailnewComponent } from './productdetailnew/productdetailnew.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [{

  path: '', component:LandingPageComponent},

  {path: 'products', component:ProductsComponent},
  {path: 'productdetail/:id', component:ProductdetailComponent},
  {path: 'productdetailnew/:name', component:ProductdetailnewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
