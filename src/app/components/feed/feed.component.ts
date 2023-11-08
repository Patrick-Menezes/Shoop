import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{


products?: product[];
finproducts?:product[];

constructor(
  private productservice: ProductService
){}


ngOnInit(): void {
  this.products= this.productservice.getProducts();
  this.finproducts = this.productservice.recommend();
  // console.log(this.products);

this.productservice.recommend();





}



}


