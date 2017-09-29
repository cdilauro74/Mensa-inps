import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})

export class DietComponent implements OnInit, OnChanges{
  
  @Input() dietName: string
  @Output() notifyDiet: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.notifyDiet.emit(`I am ${this.dietName}`)
  }
  ngOnChanges(): void {
    console.log (this.dietName)
  }
  
}
