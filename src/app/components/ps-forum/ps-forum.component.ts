import { Component, OnInit } from '@angular/core';
import {PSDataService} from "../../service/ps-data.service";

@Component({
  selector: 'ps-forum',
  templateUrl: './ps-forum.component.html',
  styleUrls: ['./ps-forum.component.css']
})
export class PSForumComponent implements OnInit {
  data$:any;

  constructor(private dataService:PSDataService) {
    this.dataService.getAll().subscribe(value => this.data$ = value);
  }

  ngOnInit(): void {
  }

}
