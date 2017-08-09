import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() {}

  sayHello = () => console.log('hello');
}
