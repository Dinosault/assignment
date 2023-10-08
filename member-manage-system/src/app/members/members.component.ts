import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{
  
  members : Member[]=[];

constructor(private memberservice: MemberService){}

ngOnInit(): void {
  this.getMembers();
}

  getMembers(): void {
    this.memberservice.getMembers()
    .subscribe(members => this.members = members);  }

}
