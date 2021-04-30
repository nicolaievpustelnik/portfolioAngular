import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  productsFilter: Product[] = [];

  constructor(private http: HttpClient) { 
    
    this.loadProducts();
  }

  private loadProducts(){

    return new Promise<void>((resolve, reject) => {
      
      this.http.get('https://angularportfolio-29bc1-default-rtdb.firebaseio.com/products_idx.json')
        .subscribe((resp: Product[]) => {
  
          this.products = resp;
          
          setTimeout(() => {
            this.loading = false;
          }, 1000);
  
          resolve();
        });

    });

  }

  getProduct(id: string){

    return this.http.get(`https://angularportfolio-29bc1-default-rtdb.firebaseio.com/products/${id}.json`);
  } 

  searchProduct(term: string){

    if (this.products.length === 0) {
      //Load products

      this.loadProducts().then(() => {

        //Run after having the products
        //Apply filter
        this.filterProducts(term);
      });

    }else {
      //Apply filter
      this.filterProducts(term);
    }
    
  }

  private filterProducts(term: string){

    this.productsFilter = [];
    term = term.toLocaleLowerCase();

    this.products.forEach(prod => {

      const titleLower = prod.title.toLocaleLowerCase();

      if (prod.category.indexOf(term) >= 0 || titleLower.indexOf(term) >= 0) {
        this.productsFilter.push(prod);
      }

    })
  }

}

