import { Injectable } from '@angular/core';
import { Member } from './member';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private membersUrl = 'api/members';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET heroes from the server */
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
      .pipe(
        catchError(this.handleError<Member[]>('getMembers', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`fetched member id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, this.httpOptions).pipe(
      tap(_ => this.log(`updated member id=${member.id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }

  /** POST: add a new hero to the server */
  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl, member, this.httpOptions).pipe(
      tap((newMember: Member) => this.log(`added member w/ id=${newMember.id}`)),
      catchError(this.handleError<Member>('addMember'))
  );
  }

  /** DELETE: delete the hero from the server */
  deleteMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;

    return this.http.delete<Member>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted member id=${id}`)),
      catchError(this.handleError<Member>('deleteMember'))
    );
  }

  /* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Member[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Member[]>(`${this.membersUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
        this.log(`found members matching "${term}"`) :
        this.log(`no members matching "${term}"`)),
    catchError(this.handleError<Member[]>('searchMembers', []))
  );
}

}
