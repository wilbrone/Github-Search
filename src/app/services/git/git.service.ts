import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConst } from '../../constants/app-const';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class GitService {

  private serverPath: string = AppConst.serverPath;
  private sPath: string = AppConst.Path;

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

  getRepos(param){
    console.log(param);
    let url = this.sPath + param + "&?api_key=" + environment.APIKEY;
    console.log(url);

    return this.http.get(url);
  }

}