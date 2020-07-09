import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {
  contents=[{content:"this is top",direction:"TOP"},{content:"this is Down",direction:"DOWN"},{content:"this is Left",direction:"LEFT"},{content:"this is Right",direction:"RIGHT"}]
  constructor() { }

  ngOnInit(): void {
  }

}
