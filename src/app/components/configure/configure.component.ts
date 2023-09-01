import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {



  token: string ="";
  constructor(private tokenService: TokenService ) { }

  ngOnInit(): void {
  }

  setToken() {
    this.tokenService.setToken(this.token);
  }

  getToken(){
    return this.token;
  }

}
