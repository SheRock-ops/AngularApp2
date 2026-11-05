
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';

declare function describe(description: string, specDefinitions: () => void): void;
declare function beforeEach(action: () => void | Promise<void>): void;
declare function it(description: string, testFunction: () => void): void;
declare function expect(actual: unknown): { toBeTruthy(): void };

describe('TaskFormComponent', () => {

    let component: TaskFormComponent;
    let fixture: ComponentFixture<TaskFormComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [TaskFormComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(TaskFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    // Verifies that the Task Form component is created successfully.
    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
