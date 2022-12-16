import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


export interface Data{
    text:string;
    value: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource: BehaviorSubject<string> = new BehaviorSubject<string>('Scegli il tuo indirizzo');

  private objData: BehaviorSubject<Data> = new BehaviorSubject<Data>({'text': 'Ciao', value: 'Scegli il tuo indirizzo'});
  data: Observable<string> = this.dataSource.asObservable();
  dataObj: Observable<Data> = this.objData.asObservable();

 
  constructor() { }
 
  sendData(data: string) {
    this.dataSource.next(data);
  }

  sendObjData( data: Data) {
    this.objData.next(data);
  }

}
