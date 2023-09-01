import { Component, OnInit } from '@angular/core';
import {LanguageDetectionService} from "../../services/language-detection.service";
import {HistoryService} from "../../services/history.service";
import {Language, Postt, Similarity, SingleLanguage} from "../../model";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {


  box: boolean = false;
  text:string = "";
  date: Date = new Date();
  address:string ="";

  post: Postt = {
    id: 0,
    methode: 'GET',
    date: this.date,
    address: this.address

  };
  singleLanguage: SingleLanguage = {
    lang: '',
    confidence: ''
  };
  language: Language = {
    timestamp: '',
    time: '',
    detectedLangs: []
  };

  constructor(private languageDetectionService: LanguageDetectionService,private historyService: HistoryService ) {


  }


  ngOnInit(): void {
    console.log(this.box);
  }

  setText() {
    this.languageDetectionService.findPost(this.text,this.box).subscribe((language) => {
      this.language = language;
    })
    this.address = this.languageDetectionService.getAddress();
    this.post = {
      id: 0,
      methode: 'GET',
      date: this.date,
      address: this.address
    };

    this.historyService.add(this.post);
  }

  reverse(): void {
    this.box = !this.box
  }

}
