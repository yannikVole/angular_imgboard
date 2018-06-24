import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../../../shared/Thread.model';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  @Input() comments;

  constructor() { }

  ngOnInit() {
  }

}
