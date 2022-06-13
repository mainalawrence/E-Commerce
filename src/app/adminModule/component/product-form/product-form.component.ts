import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  ProductForm!:FormGroup;
   Types=["____Select___","Laptops","Computers","Phones","Acessories"]
  constructor(private fb:FormBuilder) { }

  ngOnInit(){
   let features=this.fb.array([]);
   let specifications=this.fb.array([]);
   let images=this.fb.array([]);

    this.ProductForm=this.fb.group({
    id:['',Validators.required],
    name:['',Validators.required],
    cost:['',Validators.required],
    brand:['',Validators.required],
    description:['',Validators.required],
    Features:features,
    Specifications:specifications,
    images:images,
    type:['',Validators.required]
    })
    this.ProductForm.valueChanges.subscribe(res=>console.log(res));
  }
  getId(){
    return this.ProductForm.get('id');
  }
  getName(){
    return this.ProductForm.get('name');
  }
  getCost(){
    return this.ProductForm.get('cost');
  }
  getBrand(){
    return this.ProductForm.get('brand');
  }
 getDescription(){
    return this.ProductForm.get('description');
  }
  getFeatures(){
    return this.ProductForm.get('Features') as FormArray;
  }
 getSpecifications(){
    return this.ProductForm.get('Specifications') as FormArray;
  }
  addSpecification(){
    
  }
getImages(){
    return this.ProductForm.get('Features') as FormArray;
  }
 getType(){
    return this.ProductForm.get('type');
  }
  
  onSubmit($event:any) { 
    $event.preventDefault();
    console.log(this.ProductForm.value); 
   }

}
