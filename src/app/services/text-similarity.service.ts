import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Similarity} from "../model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly apiUrl = environment.postApi
  address: string = "";
  constructor(private httpClient: HttpClient) {
  }

  findPost(text1: string,text2:string): Observable<Similarity> {
    this.setAddress(`${this.apiUrl}/sim/v1/?text1=${text1}&text2=${text2}&token=${localStorage.getItem('token')}`);
    return this.httpClient.get<Similarity>(`${this.apiUrl}/sim/v1/?text1=${text1}&text2=${text2}&token=${localStorage.getItem('token')}`)
  }

  setAddress(addr:string){
    this.address = addr;
  }

  getAddress():string{
    return this.address;
  }

}
