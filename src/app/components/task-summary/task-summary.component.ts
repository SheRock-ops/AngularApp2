
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-task-summary',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './task-summary.component.html',
    styleUrl: './task-summary.component.css'
})
export class TaskSummaryComponent {

    // Injects the shared TaskService.
    private taskService = inject(TaskService);

    // Transforms task updates into live dashboard statistics.
    summary$ = this.taskService.getTasks().pipe(
        map(tasks => {

            const total = tasks.length;

            const completed = tasks.filter(
                task => task.completed
            ).length;

            const pending = total - completed;

            const progress = total > 0
                ? Math.round((completed / total) * 100)
                : 0;

            return {
                total,
                completed,
                pending,
                progress
            };

        })
    );

}
