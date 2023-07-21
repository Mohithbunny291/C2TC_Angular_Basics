import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() public parentData: any; // @Input('parentData') public name;
  
  @Output() public childEvent = new EventEmitter;

  public fireEvent(){
    this.childEvent.emit("Hello to child parent component interaction")
  }    
}
