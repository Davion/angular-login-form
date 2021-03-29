import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  isTrue: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(){
    this.isTrue = !this.isTrue;
  }

}
