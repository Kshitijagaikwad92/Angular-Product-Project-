import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ProductListService implements InMemoryDbService{
  createDb()
  {
    let products = [
      {id:1, name: 'Bag',price:1200, qty: '2'},
      {id:2, name: 'Bottle',price:500, qty: '3'},
      {id:3, name: 'Laptop',price:720000, qty: '1'},
      {id:4, name: 'Shirt',price:800, qty: '1'},
      {id:5, name: 'Pant',price:1000, qty: '1'},
    ]
    return {products}      
  }
    constructor() 
    {}
  }