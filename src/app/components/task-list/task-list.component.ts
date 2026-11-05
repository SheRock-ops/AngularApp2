
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { PriorityHighlightDirective } from '../../directives/priority-highlight.directive';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [
        CommonModule,
        TruncatePipe,
        PriorityHighlightDirective
    ],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css'
})
export class TaskListComponent {

    // Injects the shared TaskService.
    private taskService = inject(TaskService);

    // Provides observable task updates to the template.
    // Angular's async pipe automatically manages subscriptions.
    tasks$ = this.taskService.getTasks();

    // Stores the currently selected task filter.
    selectedFilter: 'All' | 'Pending' | 'Completed' = 'All';

    // Filters tasks based on their completion status.
    filterTasks(tasks: Task[]): Task[] {

        if (this.selectedFilter === 'Pending') {
            return tasks.filter(task => !task.completed);
        }

        if (this.selectedFilter === 'Completed') {
            return tasks.filter(task => task.completed);
        }

        return tasks;
    }

    // Changes the completion status of the selected task.
    toggleCompletion(taskId: number): void {
        this.taskService.toggleTaskCompletion(taskId);
    }

    // Deletes the selected task.
    deleteTask(taskId: number): void {
        this.taskService.deleteTask(taskId);
    }

}
