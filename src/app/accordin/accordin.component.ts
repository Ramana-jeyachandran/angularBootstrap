import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordin',
  templateUrl: './accordin.component.html',
  styleUrls: ['./accordin.component.css']
})
export class AccordinComponent implements OnInit {
  titles=[{name:"Moon"},{name:"Sun"}];
  constructor() { }

  ngOnInit(): void {
  }

}
