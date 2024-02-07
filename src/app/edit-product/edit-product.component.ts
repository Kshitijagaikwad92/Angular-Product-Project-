import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  constructor(private productService : ProductService,private route: ActivatedRoute){}
  id ! : number                        
  product = ''                           
  productEditForm !: FormGroup
  
  ngOnInit()
  {
    this.id = this.route.snapshot.params['id']        
    this.productEditForm = new FormGroup({
      id: new FormControl('' ,[Validators.required]),
      name: new FormControl('' ,[Validators.required]),
      price: new FormControl('' ,[Validators.required]) ,
      qty: new FormControl('' ,[Validators.required])
    })
    this.productService.EditProduct(this.id).subscribe(x => this.productEditForm.patchValue(x))
  }
  EditProduct()
  {
   this.productService.UpdateProduct(this.productEditForm.value)
  }
}
