import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject =  new BehaviorSubject<boolean>(true);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() { }

  showLoading(){
    console.log('this.loadingSubject');
    this.loadingSubject.next(true);
  }

  hideLoading(){
    this.loadingSubject.next(false);
  }
}
