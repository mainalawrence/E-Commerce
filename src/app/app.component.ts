import { Component } from '@angular/core';
import { AuthService } from './authenticationModule/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  atAdmin=0;
  constructor(private authService:AuthService){
   this.authService.adminuser.subscribe(res=>{
     this.atAdmin=res;
   })
  }

  
  title = 'BrightTech';

}
