import { Component } from '@angular/core';
import { Member } from '../member';
import { LoginService } from '../login.service';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  members : Member[]=[];

  inputValue: string = '';

  constructor(
    private memberservice: MemberService,
    public loginService: LoginService,
    ){}

  login(){
    this.loginService.login();
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
