import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'kt-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {
	@Input() menItems: NavMenu[];
	@Input() menuDesc: string;
  constructor() { }

  ngOnInit() {
  }

}
export interface NavMenu {
	name: string;
	link: string;
}
