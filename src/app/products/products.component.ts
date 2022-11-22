import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backendservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products : Array<any> = [];
  public product :any = null;
  constructor(public service: BackendService, 
    public router: Router) { }

  ngOnInit(): void {
    this.readProducts()
  }
  readProducts(){
    this.service.getAllProducts().subscribe((data:any) => {
      this.products = data
      console.log(this.products)
    })
  }
  clickDetail(id:any){
  
    this.router.navigate(['productdetail/'+id]);
    console.log("Detail", id);
  }
  
  
}

