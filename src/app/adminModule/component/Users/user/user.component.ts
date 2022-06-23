import { Component, OnInit ,Input} from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStateService } from 'src/app/adminModule/Services/user-state.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myform:any;
  open=false;

  @Input() Users:any=[]; 
  
  pagesUsers:any;
  page = 1;
  pageSize =10;
  collectionSize = this.Users.length;

  closeResult = '';
 

  constructor(private userStateService:UserStateService, private modalService: NgbModal) {}
  ngOnInit(): void {}


  ngOnChanges(){
  this.collectionSize = this.Users.length;

 this.refreshUsers();
  
  }
  

  refreshUsers() {
    this.pagesUsers =this.Users.map((user:any,i:any)=> ({_id: i + 1, ...user})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

   
  updateUser(id:string){
   console.log(this.Users.filter((user:any)=>{
     if(user.id===id) return user;
     return;
   })[0]);
   
    
  }
  deleteUser(id:string){
    this.userStateService.trushUsers(id).subscribe(res=>{
      console.log(res);
    })
  }

  // open(content:any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
