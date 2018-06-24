import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment;

  constructor() { }

  ngOnInit() {
  }

  hasImageUrl():boolean{
    if(this.comment.img_url.length > 4){
      return true;
    }else {
      return false;
    }
  }

}
