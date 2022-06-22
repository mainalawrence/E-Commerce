import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() Users:any=[]; 
  page = 1;
  pageSize = 4;
  collectionSize = this.Users.length;
    constructor() {
    this.refreshUsers();
  }

  ngOnInit(): void {

  }

  users:any[]=[];

  refreshUsers() {
    this.users = this.Users.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
