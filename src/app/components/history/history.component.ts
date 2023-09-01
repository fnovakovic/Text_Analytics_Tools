import { Component, OnInit } from '@angular/core';
import {Postt} from "../../model";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  posts: Postt[] = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.getPost();
  }


  getPost(){
    this.posts.forEach(value => {
      this.posts.pop();
    })
    this.posts = this.historyService.getList();
  }

}
