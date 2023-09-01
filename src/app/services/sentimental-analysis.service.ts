import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Sentimental, Similarity} from "../model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SentimentalAnalysisService {

  private readonly apiUrl = environment.postApi
  address: string = "";
  constructor(private httpClient: HttpClient) {
  }

  findPost(text: string,language:string): Observable<Sentimental> {
    this.setAddress(`${this.apiUrl}/sent/v1/?lang=${language}&text=${text}&token=${localStorage.getItem('token')}`);
    return this.httpClient.get<Sentimental>(`${this.apiUrl}/sent/v1/?lang=${language}&text=${text}&token=${localStorage.getItem('token')}`)
  }

  setAddress(addr:string){
    this.address = addr;
  }

  getAddress():string{
    return this.address;
  }

}
