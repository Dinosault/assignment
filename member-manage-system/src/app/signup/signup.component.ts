import { Component } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  members : Member[]=[];

  inputValue: string = '';

  constructor(
    private memberservice: MemberService,
    ){}

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.memberservice.addMember({ name } as Member)
      .subscribe(member => {
        this.members.push(member);
      });
  }
}
