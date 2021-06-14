import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ps-forum-item',
  templateUrl: './ps-forum-item.component.html',
  styleUrls: ['./ps-forum-item.component.css']
})
export class PSForumItemComponent implements OnInit {

  @Input('id')
  id:string |undefined;

  @Input('title')
  title:string |undefined;

  @Input('text')
  text:string |undefined;

  @Input('image')
  image:string |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
