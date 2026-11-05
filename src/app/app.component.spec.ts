/// <reference types="jasmine" />
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent]
        }).compileComponents();
    });

    // Test 1: Verify that the application is created.
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });

    // Test 2: Verify the application title.
    it('should have the Daily Focus Tracker title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app.title).toEqual('Daily Focus Tracker');
    });

    // Test 3: Verify that the main components render.
    it('should render the task tracker components', () => {
        const fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;

        expect(compiled.querySelector('app-task-form')).toBeTruthy();
        expect(compiled.querySelector('app-task-list')).toBeTruthy();
        expect(compiled.querySelector('app-task-summary')).toBeTruthy();
    });

});

