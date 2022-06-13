import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-photo-slide',
  templateUrl: './product-photo-slide.component.html',
  styleUrls: ['./product-photo-slide.component.css']
})
export class ProductPhotoSlideComponent implements OnInit {
  images:any[]=[{url:'',alt:''}];
  CurrentImage=this.images[0];
  index:number=0;
  constructor() { }

  ngOnInit(): void {

  }
  prev(){
   if(this.images.length < this.index+1){
      this.index--;
      this.CurrentImage=this.images[this.index];
    }
    else{
      return;
    }
  }
  next()
  {
    if(this.images.length > this.index+1){
        this.index++;
      this.CurrentImage=this.images[this.index];
    }
    else{
      return;
    }
  }

}
