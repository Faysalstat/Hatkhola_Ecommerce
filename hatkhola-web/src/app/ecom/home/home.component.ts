import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/service-api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private transactionService: TransactionService) { }
  token: string = 'a3bda49d-8c52-4fff-8bda-443283aa063a';
  productList: any[] = [];
  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.transactionService.fetchAllProducts(this.token).subscribe(
      (data) => {
        console.log(data)
        this.productList = data.productList;
      }
    );

  }

}
