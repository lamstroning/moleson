import { Component, OnInit } from '@angular/core';
import {SubheaderService} from "../../../core/_base/layout";

@Component({
  selector: 'kt-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})

export class TerminalComponent implements OnInit {
  constructor(public subheaderService: SubheaderService) {

  }
  catalogItem = this.subheaderService.catalog[0];

  ngOnInit() {
  }

}
