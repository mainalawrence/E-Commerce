import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {


  UserIsAdmin:number=0;
   LoggedIn:boolean=false;

   loggedIn(){
    return this.LoggedIn;
   }
   setloggedIn(){
     if(localStorage.getItem('bright-tech-token')!==null){
      this.LoggedIn=true;
      return;
     }
     this.LoggedIn=false
   }
   logout(){

     localStorage.removeItem('bright-tech-token');
     this.LoggedIn=false;
   }
  

  constructor() { }
}
