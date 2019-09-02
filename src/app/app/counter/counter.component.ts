import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({

  selector: 'pg-counter',

  templateUrl: './counter.component.html',

  styleUrls: ['./counter.component.scss']

})

export class CounterComponent implements OnInit {
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() stepSize: number = 1;
  @Output() decreased: EventEmitter<number> = new EventEmitter();
  @Output() increased: EventEmitter<number> = new EventEmitter();
  public count: number = 0;

  public increase() {
    if (this.count + this.stepSize > this.max) {
      this.count = this.max;
    } else {
      this.count += this.stepSize;
    }
    this.increased.emit(this.count);
  }


  public decrease() {
    if (this.count - this.stepSize < this.min) {
      this.count = this.min;
    } else {
      this.count -= this.stepSize;
    }
    this.decreased.emit(this.count);

  }


  constructor() {

  }


  ngOnInit() {

  }


}
