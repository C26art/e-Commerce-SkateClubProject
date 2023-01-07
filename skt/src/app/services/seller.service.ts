import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)


  constructor(private httpClient: HttpClient, private router:Router) { }

  userSignUp(data:SignUp){
    this.httpClient.post('http://localhost:3000/seller',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home']);
      }
    });
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data:Login){
    this.httpClient.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('seller',JSON.stringify(result.body))
       this.router.navigate(['seller-home'])
     }else{
       console.warn("login failed");
       this.isLoginError.emit(true)
     }
    })
   }
}
