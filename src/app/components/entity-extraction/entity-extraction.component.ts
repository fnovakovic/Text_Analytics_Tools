import { Component, OnInit } from '@angular/core';
import {Annotations, EntityExtraction, Postt} from "../../model";
import {HistoryService} from "../../services/history.service";
import {EntytyExtractionService} from "../../services/entyty-extraction.service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {
  date: Date = new Date();
  box: string = '';
  boxImage: boolean = false;
  boxAbstract: boolean = false;
  boxCategory: boolean = false;
  str: string = '';
  text:string = '';
  address: string = '';

  num: number = 0;

  post: Postt = {
    id: 0,
    methode: 'GET',
    date: this.date,
    address:''

  };
  annotations: Annotations = {
    title: '',
    start: ''

  };

  entity: EntityExtraction = {
    lang: '',
    annotations: []

  };


  constructor(private historyService: HistoryService,private entityExtractionService: EntytyExtractionService) { }

  ngOnInit(): void {
  }

  setImage(){
    //this.boxImage = !this.boxImage;
    if(this.boxImage == true){
      if(this.str == ''){
        this.str = 'image ';
      }else{
        this.str = this.str + 'image ';
      }
    }else{
      this.str =  this.str.replace('image ','');
    }
  }

  reverseImage(): void{
    this.boxImage = !this.boxImage;
    this.setImage();
  }

  reverseCategory(): void{
    this.boxCategory = !this.boxCategory;
    this.setCategory();
  }
  setCategory(){
    //this.boxCategory = !this.boxCategory;
    if(this.boxCategory == true){
      if(this.str == ''){
        this.str = 'category ';
      }else{
        this.str = this.str + 'category ';
      }
    }else{
      this.str = this.str.replace('category ','');
    }
  }

  reverseAbstract(): void{
    this.boxAbstract = !this.boxAbstract;
    this.setAbstract();
  }
  setAbstract(){
    //this.boxAbstract = !this.boxAbstract;
    if(this.boxAbstract == true){

      if(this.str == ''){
        this.str = 'abstract ';
      }else{
        this.str = this.str + 'abstract ';         ///////PROVERI DA JI LE SPACE ILI , NA SAJTU PISE DA JE EXAMPLE SA , ALI U LINKU KAD STAVIS , NE DOBIJAS ONO SA %020% TAKO NESTO
      }
    }else{
      this.str = this.str.replace('abstract ','');

    }

  }

  setText(){
    this.num = (this.num * 1.0) / 100;
    //console.log(this.str);

    this.entityExtractionService.findPost(this.text,this.str,this.num).subscribe((entity) => {
      this.entity = entity;
    })
    this.address = this.entityExtractionService.getAddress();
    this.post = {
      id: 0,
      methode: 'GET',
      date: this.date,
      address: this.address
    };
    this.historyService.add(this.post);
  }


}
