import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title = new BehaviorSubject<string>('App title');
  private title$ = this.title.asObservable();


  constructor() { }

  setTitle(title: string) {
    this.title.next(title);


  }
  getTitle(): Observable<string> {
    return this.title$;
  }
}
