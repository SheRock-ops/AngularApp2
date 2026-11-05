
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

    // Injects the shared service using Angular dependency injection.
    private taskService = inject(TaskService);

    // The async pipe subscribes and unsubscribes automatically.
    tasks$ = this.taskService.getTasks();

    // Controls which tasks are displayed.
    selectedFilter: 'All' | 'Pending' | 'Completed' = 'All';

    // Filters the task list without modifying service data.
    filterTasks(tasks: Task[]): Task[] {

        if (this.selectedFilter === 'Pending') {
            return tasks.filter(task => !task.completed);
        }

        if (this.selectedFilter === 'Completed') {
            return tasks.filter(task => task.completed);
        }

        return tasks;
    }

    // Marks a task as completed or pending.
    toggleCompletion(taskId: number): void {
        this.taskService.toggleTaskCompletion(taskId);
    }

    // Deletes a selected task.
    deleteTask(taskId: number): void {
        this.taskService.deleteTask(taskId);
    }

}
