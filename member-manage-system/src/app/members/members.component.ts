import { Component } from '@angular/core';
import { MEMBERS } from '../mock-members';
import { Member } from '../member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  members = MEMBERS;

  selectedMember?: Member;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
