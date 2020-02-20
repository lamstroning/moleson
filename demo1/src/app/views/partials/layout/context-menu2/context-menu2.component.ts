// Angular
import {Component, Input} from '@angular/core';

/**
 * Sample context menu dropdown
 */
@Component({
	selector: 'kt-context-menu2',
	templateUrl: './context-menu2.component.html',
	styleUrls: ['./context-menu2.component.scss']
})
export class ContextMenu2Component {
	@Input() title = 'экспорт';
}
