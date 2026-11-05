
import { Directive, ElementRef, Renderer2, input, effect, inject } from '@angular/core';

@Directive({
    selector: '[appPriorityHighlight]',
    standalone: true
})
export class PriorityHighlightDirective {

    // Receives the priority and completion status from the task.
    priority = input<string>('Medium');
    completed = input<boolean>(false);

    private element = inject(ElementRef);
    private renderer = inject(Renderer2);

    constructor() {

        // Updates the task appearance whenever its inputs change.
        effect(() => {

            const priority = this.priority();
            const completed = this.completed();

            let borderColor = '#d9b66f';

            if (priority === 'High') {
                borderColor = '#b85c50';
            } else if (priority === 'Low') {
                borderColor = '#24745d';
            }

            // Completed tasks use a muted border.
            if (completed) {
                borderColor = '#c7d4cb';
            }

            this.renderer.setStyle(
                this.element.nativeElement,
                'border-left',
                `5px solid ${borderColor}`
            );

            this.renderer.setStyle(
                this.element.nativeElement,
                'opacity',
                completed ? '0.7' : '1'
            );

        });

    }

}

