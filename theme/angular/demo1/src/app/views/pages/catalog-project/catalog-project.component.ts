import { Component, OnInit } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

@Component({
  selector: 'kt-catalog-project',
  templateUrl: './catalog-project.component.html',
  styleUrls: ['./catalog-project.component.scss']
})
export class CatalogProjectComponent implements OnInit {


  constructor(private layoutConfigService: LayoutConfigService) {

  }

  ngOnInit() {
  }

}

