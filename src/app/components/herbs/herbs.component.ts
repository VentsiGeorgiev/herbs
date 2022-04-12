import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent implements OnInit {
  constructor(private dataService: DataService) { }
  herbsData: any;

  ngOnInit(): void {
    this.herbsData = this.dataService.herbsDetails;
  }

}
