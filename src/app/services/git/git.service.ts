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

  getUser(param){
    console.log(param);
    let url = this.serverPath + param + "?api_key=" + environment.APIKEY;
    console.log(url);

    return this.http.get(url);
  }

  getUserRepo(params){
    console.log(params);
    let url = params + "?api_key=" + environment.APIKEY;
    console.log(url);

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