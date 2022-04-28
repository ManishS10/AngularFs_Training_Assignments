import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  onOptionClick:EventEmitter<string> = new EventEmitter();

  click(value:number)
  {
    this.onOptionClick.emit(value.toString());
  }
  

}
