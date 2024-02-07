import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'productlist', component : ProductlistComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'AddProduct', component : AddProductComponent},
  {path : 'Editproduct/:id' , component : EditProductComponent},
  {path : '**' , component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
