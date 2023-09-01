import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Language} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.postApi
  address: string = "";
  constructor(private httpClient: HttpClient) {
  }

  findPost(text: string,box: boolean): Observable<Language> {
    console.log(box);
    this.setAddress(`${this.apiUrl}/li/v1/?text=${text}&clean=${box}&token=${localStorage.getItem('token')}`);

    return this.httpClient.get<Language>(`${this.apiUrl}/li/v1/?text=${text}&clean=${box}&token=${localStorage.getItem('token')}`)
  }

  setAddress(addr:string){
    this.address = addr;
  }

  getAddress():string{
    return this.address;
  }

}
