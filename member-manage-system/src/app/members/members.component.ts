import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{

  members : Member[]=[];

  constructor(private memberservice: MemberService,
    private messageService: MessageService){}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberservice.getMembers()
    .subscribe(members => this.members = members);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.memberservice.addMember({ name } as Member)
      .subscribe(member => {
        this.members.push(member);
      });
  }

}
