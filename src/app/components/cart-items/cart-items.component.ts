import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { MatCardModule } from '@angular/material/card';


const PRODUCT_DATA: Product[] = [
    {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category_id": 3,
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "qty": 50
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category_id": 3,
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "qty": 50
        },
];


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products?: Product[];
  //currentTutorial: Tutorial = {};
  //currentIndex = -1;
  //title = '';
   productList = PRODUCT_DATA;
   displayedColumns: string[] = ['title', 'description', 'price'];
   dataSource = PRODUCT_DATA;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.retrieveCartProducts();
  }

  retrieveCartProducts(): void {
    this.cartService.getAll()
      .subscribe(
        data => {
          this.cartItems = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveProducts();
  }

  deleteProduct(id): void {
     this.cartService.remove(id)
     .subscribe(
     response => {
        console.log(response);
     },
     error => {
      console.log(error);
    }
  }

  checkOut(orderId): void {
      this.cartService.checkOut(orderId)
      .subscribe(
      response => {
         console.log(response);
      },
      error => {
       console.log(error);
     }
  }

}
