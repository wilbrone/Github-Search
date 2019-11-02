import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor() { }

  getUser(params){
    console.log("I am here");

    return "I am here";
  }
}
