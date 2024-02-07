import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  constructor(private productService: ProductService)
  {}
  products:any[]=[]
  ngOnInit()
  {
    this.productService.getProducts().subscribe((data: any)=> {this.products = data})
  }
  deleteProduct(productId : any)
  {
    this.productService.DeleteProduct(productId).subscribe((res) =>{
      this.products = this.products.filter(item => item.id !== productId);
    })
  }
}
