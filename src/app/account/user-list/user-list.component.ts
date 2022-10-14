import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  dataSource = new Array<any>();
  displayedColumns: string[] = ['Id', 'FullName', 'Mobile', 'EmailId'];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dataSource = [{Id:"1",FullName:"Prince Yadav",Mobile:"007894786",EmailId:"prince.yadav@gmail.com"}]
  }

  getUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      console.log(response);
      if (response.ReturnData)
        this.dataSource = response.ReturnData
    })
  }
}
