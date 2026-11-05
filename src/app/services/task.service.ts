
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    // Stores our tasks in memory.
    private tasks: Task[] = [];

    // Holds the latest task list and notifies subscribers of changes.
    private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

    // Exposes task updates without allowing components to modify the subject.
    public tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

    constructor() { }

    // Returns an observable that components can subscribe to.
    getTasks(): Observable<Task[]> {
        return this.tasks$;
    }

    // Adds a new task to our task collection.
    addTask(task: Omit<Task, 'id' | 'completed'>): void {

        const newTask: Task = {
            ...task,
            id: Date.now(),
            completed: false
        };

        this.tasks = [...this.tasks, newTask];

        // Notifies every subscriber that the task list has changed.
        this.tasksSubject.next(this.tasks);
    }

    // Changes the completion status of a selected task.
    toggleTaskCompletion(taskId: number): void {

        this.tasks = this.tasks.map(task =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        );

        this.tasksSubject.next(this.tasks);
    }

    // Removes a task from the collection.
    deleteTask(taskId: number): void {

        this.tasks = this.tasks.filter(task => task.id !== taskId);

        this.tasksSubject.next(this.tasks);
    }

    // Returns the number of completed tasks.
    getCompletedCount(): number {
        return this.tasks.filter(task => task.completed).length;
    }

    // Returns the number of tasks that are still pending.
    getPendingCount(): number {
        return this.tasks.filter(task => !task.completed).length;
    }

}
