
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PriorityHighlightDirective } from './priority-highlight.directive';

// Test component for checking the custom directive.
@Component({
    standalone: true,
    imports: [PriorityHighlightDirective],
    template: `
        <div
            appPriorityHighlight
            [priority]="'High'"
            [completed]="false">
            Test Task
        </div>
    `
})
class TestComponent { }

describe('PriorityHighlightDirective', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent]
        }).compileComponents();
    });

    // Verify that Angular can create the directive.
    it('should create the directive successfully', () => {
        const fixture = TestBed.createComponent(TestComponent);

        fixture.detectChanges();

        const element = fixture.nativeElement.querySelector(
            '[appPriorityHighlight]'
        );

        expect(element).toBeTruthy();
    });

});

