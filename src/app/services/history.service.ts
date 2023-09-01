import { Injectable } from '@angular/core';
import {Postt} from "../model";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  postList: Postt[] = [];

  constructor() {
  }


  add(post: Postt) {
    this.postList.push(post);
  }

  getList(): Postt[] {
    return this.postList;
  }
}
