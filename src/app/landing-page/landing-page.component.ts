import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backendservice';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
 
  name = 'Angular';
  imageObject = [{
      thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      title: ''
  }, {
    image: '',
    thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Bosch_logo.png',
    title: ''
},{
    image: '',
    thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/L%27Or%C3%A9al_logo.svg',
    title: ''
}, {
    image: '',
    thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Panasonic_logo.svg'
}, {
    image: '',
    thumbImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Logo_of_Mango_%28new%29.svg',
    title: ''
}
]
public pname:any ;
public product: any;

  constructor(private service: BackendService, 
     private router:Router
    ) { }
 
  ngOnInit(): void {
   
  }
  clickSearch(pname:string){
    
    this.router.navigate(['productdetailnew/' +pname]);
  }


//   search(pname:string){

//     this.service.searchProduct(pname).subscribe((value: any) => {
//       this.product = value;
     
//       console.log(pname);
//       console.log("product okundu", this.pname);
     
//     });
   
// }
  }
