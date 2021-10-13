import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  userName: string;

  constructor(private configService: ConfigService) {
    this.userName = this.configService.getUserName();
  }

  ngOnInit(): void {
    this.configService.incrementConfigComponentVisits();
  }

  getConfigComponentVisits() {
    return this.configService.getConfigComponentVisits();
  }

  setUserName() {
    this.configService.setUserName(this.userName);
  }
}
