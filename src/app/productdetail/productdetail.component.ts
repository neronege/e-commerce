import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backendservice';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  public product:any = null;
  public able = true;
  constructor(private service: BackendService,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    let sid = this.route.snapshot.params["id"]; //url'den id çekmek için
    console.log("snapshot", sid);
    var x =this.getId(sid);
    console.log(x);
  }
  getId(id: number) {
    this.service.getProduct(id).subscribe((value: any) => {
      this.product = value;
      console.log("product okundu", this.product);
    });
}
}
