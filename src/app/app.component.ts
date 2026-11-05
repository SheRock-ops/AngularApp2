
import { Component } from '@angular/core';

import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskSummaryComponent } from './components/task-summary/task-summary.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        TaskFormComponent,
        TaskListComponent,
        TaskSummaryComponent
    ],
    template: `
        <app-task-form></app-task-form>
        <app-task-list></app-task-list>
        <app-task-summary></app-task-summary>
    `,
    styles: []
})
export class AppComponent {

    // Main application title.
    title = 'Daily Focus Tracker';

}
