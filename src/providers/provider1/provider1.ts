import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the Provider1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Provider1Provider Provider');
  }

  getData(){

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

}
