import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntityExtraction, Language} from "../model";

@Injectable({
  providedIn: 'root'
})
export class EntytyExtractionService {

  private readonly apiUrl = environment.postApi
  address: string = "";
  constructor(private httpClient: HttpClient) {
  }

  findPost(text: string,box: string,num:number): Observable<EntityExtraction> {
   // console.log(box);
    this.setAddress(`${this.apiUrl}/nex/v1/?text=${text}&include=${box}&token=${localStorage.getItem('token')}`);

    return this.httpClient.get<EntityExtraction>(`${this.apiUrl}/nex/v1/?text=${text}&include=${box}&min_confidence=${num}&token=${localStorage.getItem('token')}`)
  }

  setAddress(addr:string){
    this.address = addr;
  }

  getAddress():string{
    return this.address;
  }


}
