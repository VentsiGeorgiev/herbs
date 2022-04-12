import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private dataService: DataService) { }
  herbsData: any;

  ngOnInit(): void {
    this.herbsData = this.dataService.herbsDetails;
  }

}
