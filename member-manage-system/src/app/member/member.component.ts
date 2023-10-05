import { Component } from '@angular/core';
import { Member } from '../member' 

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  member : Member ={
    id: 1,
    name: 'Bob'
  }
}
