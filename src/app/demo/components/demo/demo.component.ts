import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'store';         // pueden llamar en la vista
  items = ['carlos', 'neymar', 'messi'];

  power = 10;
  ngOnInit(): void {
  }
  addItem(){
    this.items.push('nuevo Item');
  }
  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
