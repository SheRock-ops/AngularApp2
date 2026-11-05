// Defines the structure of a task in our application.

export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    priority: 'Low' | 'Medium' | 'High';
    completed: boolean;
}
