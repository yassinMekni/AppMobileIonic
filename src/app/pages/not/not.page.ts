import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not',
  templateUrl: './not.page.html',
  styleUrls: ['./not.page.scss'],
})
export class NotPage implements OnInit {
  rating: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
