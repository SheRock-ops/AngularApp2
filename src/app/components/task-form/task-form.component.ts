
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
    selector: 'app-task-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

    // Injects the shared TaskService into this component.
    private taskService = inject(TaskService);

    // Stores the values entered in the task form.
    title: string = '';
    description: string = '';
    dueDate: string = '';
    priority: Task['priority'] = 'Medium';

    // Validates the form and adds a task through TaskService.
    addTask(): void {

        if (!this.title.trim()) {
            return;
        }

        this.taskService.addTask({
            title: this.title.trim(),
            description: this.description.trim(),
            dueDate: this.dueDate,
            priority: this.priority
        });

        // Clears the form after successfully adding a task.
        this.resetForm();
    }

    // Restores the default form values.
    resetForm(): void {
        this.title = '';
        this.description = '';
        this.dueDate = '';
        this.priority = 'Medium';
    }

}
