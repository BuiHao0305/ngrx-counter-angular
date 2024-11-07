import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent  implements OnInit{
  @Input() counter:any;
  ngOnInit(): void {
  
  }
  constructor(
    
  ) {
    
  }

}
