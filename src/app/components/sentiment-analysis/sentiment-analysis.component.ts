import { Component, OnInit } from '@angular/core';
import {SentimentalAnalysisService} from "../../services/sentimental-analysis.service";
import {Postt, Sentiment, Sentimental, Similarity} from "../../model";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  language:string = 'auto';
  text: string = "";
  address:string ="";
  date: Date = new Date();
  sentiment: Sentiment = {
    score: '',
    type: ''

  };
  sentimental: Sentimental = {
    timestamp: '',
    time: '',
    lang: '',
    langConfidence: '',
    text: '',
    sentiment: this.sentiment
  };
  post: Postt = {
    id: 0,
    methode: 'GET',
    date: this.date,
    address: this.address

  };

  constructor(private sentimentalAnalysisService: SentimentalAnalysisService,private historyService: HistoryService) { }

  ngOnInit(): void {
  }

  setText() {
    this.sentimentalAnalysisService.findPost(this.text,this.language).subscribe((sentiment) => {
      this.sentimental = sentiment;
    })
    this.address = this.sentimentalAnalysisService.getAddress();
    this.post = {
      id: 0,
      methode: 'GET',
      date: this.date,
      address: this.address
    };
    this.historyService.add(this.post);
  }

//   public static interpolation (a: ColorSpaceConversion, b:number, t:number):Color
// {
//   return new WEBGL_color_buffer_float
//   (
//     a.r + (b.r - a.r) * t,
//   a.g + (b.g - a.g) * t,
//   a.b + (b.b - a.b) * t,
//   a.a + (b.a - a.a) * t
// );
// }
// d
}
