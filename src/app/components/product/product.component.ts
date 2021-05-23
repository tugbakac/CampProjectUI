import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
    dataLoaded=false;
  //component httpClient ı kullanmaz solid prensipleri
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }

  // product={productID:1, productName:"Bardak", categoryID:2, unitPrice:5, unitsInStock:5 }
  // product1={productID:2, productName:"Mouse", categoryID:2, unitPrice:5, unitsInStock:5 }
  // product2={productID:3, productName:"Keyboard", categoryID:2, unitPrice:5, unitsInStock:5 }
  // product3={productID:4, productName:"Monitor", categoryID:2, unitPrice:5, unitsInStock:5 }
  // product4={productID:5, productName:"CPU", categoryID:2, unitPrice:5, unitsInStock:5 }

  // products:Product[]=[this.product1,this.product2,this.product3,this.product4,this.product];

}
