import { Component, OnInit } from '@angular/core';
import {PSDataService} from "../../service/ps-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ps-forum-details',
  templateUrl: './ps-forum-details.component.html',
  styleUrls: ['./ps-forum-details.component.css']
})
export class PSForumDetailsComponent implements OnInit {
  image:string | undefined;
  text:string |undefined;
  title:string | undefined;

  constructor(private dataService:PSDataService,private router:ActivatedRoute) {
    this.router.paramMap.subscribe(params =>{
      let id = params.get('id');
      this.dataService.getById(id).subscribe((value:any) =>{
        this.text = value.text;
        this.image = value.image;
        this.title = value.title;
      } )
    })
  }

  ngOnInit(): void {
  }

}
