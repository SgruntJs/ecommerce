import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource: BehaviorSubject<string> = new BehaviorSubject<string>('Scegli lil tuo indirizzo');
  data: Observable<string> = this.dataSource.asObservable();

 
  constructor() { }
 
  sendData(data: string) {
    this.dataSource.next(data);
  }

}
