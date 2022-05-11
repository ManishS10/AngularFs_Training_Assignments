import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  item: any= {};

  @Output() onremoveprod = new EventEmitter<number>();

  public removeprod(dno: number)
  {
    this.onremoveprod.emit(dno);
  }

}
