import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backendservice';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetailnew',
  templateUrl: './productdetailnew.component.html',
  styleUrls: ['./productdetailnew.component.css']
})
export class ProductdetailnewComponent implements OnInit {
public product :any;
  constructor(private service: BackendService,
    private route:ActivatedRoute,) { }

  ngOnInit(): void {
    let names = this.route.snapshot.params["name"];
    console.log("snapshot", names);
    this.search(names);
  }
  search(name:string){

       this.service.searchProduct(name).subscribe((value: any) => {
         this.product = value;
        
         console.log(name);
         console.log("product okundu", this.product);
        
       });
}
}