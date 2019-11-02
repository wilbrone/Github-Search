import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConst } from '../../constants/app-const';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class GitService {

  private serverPath: string = AppConst.serverPath;

  dats: any;
  constructor(private http: HttpClient) { }

  getUser(params){
    console.log(params);
    let url = this.serverPath + params + "/repos" + "?api_key=" + environment.APIKEY;
    console.log(url);
    // let headers = new Headers ({
    //   'Content-Type': 'application/json',
    // });


    return this.http.get(url);
  }
}

    // *********************************************************
    // let promise =  new Promise((resolve, reject)=>{
    //  return this.http.get(url).toPromise().then(
    //       (results)=>{
    //         resolve()
    //       },
    //       (error)=>{
    //         console.log(error)
    //         reject()
    //       })
    // });
    // console.log(promise)
    // return promise