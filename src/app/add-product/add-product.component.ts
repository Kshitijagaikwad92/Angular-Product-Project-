import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  productAddForm !: FormGroup
  constructor(private productService: ProductService)
  {}

  ngOnInit()
  {
    this.productAddForm = new FormGroup({
      id: new FormControl('' ,[Validators.required]),
      name: new FormControl('' ,[Validators.required]),
      price: new FormControl('' ,[Validators.required]),
      qty: new FormControl('' ,[Validators.required])
    })
  }
  createNewProduct()
  {
    this.productService.CreateProduct(this.productAddForm.value)
  }
}
