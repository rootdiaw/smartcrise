import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
