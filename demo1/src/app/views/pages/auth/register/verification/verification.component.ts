import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
	sex =  [
		'Мужской',
		'Женский',
	];

  constructor() { }

  ngOnInit() {
  }

}
