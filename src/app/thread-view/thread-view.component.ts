import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThreadViewService } from './thread-view.service';
import { Thread } from '../shared/Thread.model';

@Component({
  selector: 'app-thread-view',
  templateUrl: './thread-view.component.html',
  styleUrls: ['./thread-view.component.css']
})
export class ThreadViewComponent implements OnInit, OnDestroy {


  private _threads;
  private _worker;
  private _subscription;

  constructor(private threadViewService: ThreadViewService) { }

  ngOnInit(): void {
    this._worker = setInterval( () => {
      this.fetchThreads();
    }, 2000);
  }

  ngOnDestroy(): void {
    console.log('destructor called');
    this._subscription.unsubscribe();
    clearInterval(this._worker);
  }

  private fetchThreads(): void {
    this._subscription = this.threadViewService.fetchThreads().subscribe(threads => this._threads = threads);
  }

}
