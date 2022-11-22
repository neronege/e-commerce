import { Injectable } from "@angular/core";

import{HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()
export class BackendService{
    baseURL: string = "https://localhost:5001/";

    httpOptions = {
     header : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorizaton': 'my-auth-token'
     })
    }

constructor(private HttpClient:HttpClient){

}
getAllProducts(){
    return this.HttpClient.get(this.baseURL + "api"+ "/Products")
}
getProduct(id:number){
    console.log(id);
    return this.HttpClient.get(this.baseURL + "api" + "/Products/" + id)
}
searchProduct(name:string){
    console.log(name);
    return this.HttpClient.get(this.baseURL + "api" + "/Products"+ "/searchproduct/" + name)
}

}