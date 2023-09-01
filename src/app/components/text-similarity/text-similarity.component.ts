import { Component, OnInit } from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";
import {Postt, Similarity} from "../../model";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string ="";
  text2: string ="";
  address:string ="";

  similarity: Similarity = {
    timestamp: '',
    time: '',
    lang: '',
    langConfidence: '',
    similarity: ''
  };
  date: Date = new Date();

  post: Postt = {
    id: 0,
    methode: 'GET',
    date: this.date,
    address: this.address

  };
  constructor(private textSimilarityService: TextSimilarityService,private historyService: HistoryService ) { }

  ngOnInit(): void {
  }

  setText() {
    this.textSimilarityService.findPost(this.text1,this.text2).subscribe((similarity) => {
      this.similarity = similarity;
    })
    this.address = this.textSimilarityService.getAddress();
    this.post = {
      id: 0,
      methode: 'GET',
      date: this.date,
      address: this.address
    };
    this.historyService.add(this.post);
  }

}
