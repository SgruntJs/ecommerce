import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource: BehaviorSubject<string> = new BehaviorSubject<string>('Initial Value');
  data: Observable<string> = this.dataSource.asObservable();
  public isUpdated: Subject<boolean> = new Subject<boolean>();
 
  constructor() { }
 
  sendData(data: string) {
    this.dataSource.next(data);
  }


  onSendTrueUpdate(value: boolean) {
    this.isUpdated.next(value);
  }

  onReceiveTrueEdited() {
    return this.isUpdated.asObservable();
  }
}
