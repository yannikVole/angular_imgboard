import { ThreadViewService } from './../thread-view.service';
import { Component, OnInit } from '@angular/core';
import { Thread } from 'src/app/shared/Thread.model';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
  showModal = false;

  newThread: Thread;


  constructor(private threadViewService: ThreadViewService) { }

  ngOnInit() {
    this.newThread = new Thread();
  }

  toggleModal(e) {
    e.preventDefault();
    this.showModal = !this.showModal;
  }

  submitThread() {
    this.threadViewService.postThread(this.newThread).subscribe( (res) => {
      console.log(res);
    });
  }

}
