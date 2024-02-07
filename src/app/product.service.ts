import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient,
    private router: Router) {}    
  // create URL
  SERVER_URL = "http://localhost:8080/api/"

  //create methods
  getProducts()  //retrieve data
  {
    return this.httpClient.get(this.SERVER_URL+'products')   
  }
  DeleteProduct(n : any)
  {
    return this.httpClient.delete(`${this.SERVER_URL+'products'}/${n}`)
  }

  CreateProduct(product : {id:number,name:string,price:number,qty :number})
  {
    this.httpClient.post(
      `${this.SERVER_URL + 'products'}`,product
    ).subscribe((res: any) =>
    this.router.navigateByUrl('/productlist') 
    )
  }

  EditProduct(pid : any)
  {
    return this.httpClient.get(
      `${this.SERVER_URL + 'products'}/${pid}`  
    )
  }
  UpdateProduct(product: {id:number,name:string,price:number,qty :number})
  {
    return this.httpClient.put
    (`${this.SERVER_URL + 'products'}/${product.id}` ,product       
    ).subscribe((res:any) => {
      this.router.navigateByUrl('/productlist')
    })
  }
}
