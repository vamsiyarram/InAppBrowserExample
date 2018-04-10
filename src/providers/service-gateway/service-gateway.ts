import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServiceGatewayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceGatewayProvider {
  response: Observable<any>;

  constructor(public http: HttpClient) {
    console.log('Hello ServiceGatewayProvider Provider');
  }

  public post(url, data) {
    return Observable.create(observer => {
      this.http.post(url, JSON.stringify(data)).subscribe(res => {
        observer.next(res);
        observer.complete();
      });
    });
  }
}
