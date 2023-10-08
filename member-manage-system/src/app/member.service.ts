import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers(): Observable<Member[]> {
    const members = of(MEMBERS);
    return members;
  }

  getMember(id: number): Observable<Member> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const member = MEMBERS.find(m => m.id === id)!;
    return of(member);
  }

}
