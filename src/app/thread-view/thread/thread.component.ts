import { Component, OnInit, Input } from '@angular/core';
import { Thread } from 'src/app/shared/Thread.model';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  @Input() thread:Thread;

  constructor() { }

  hasImageUrl():boolean{
    if(this.thread.img_url.length > 4){
      return true;
    }else {
      return false;
    }
  }

  ngOnInit() {
  }

}
