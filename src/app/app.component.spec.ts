import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

declare const describe: (description: string, specDefinitions: () => void) => void;
declare const beforeEach: (action: () => void | Promise<void>) => void;
declare const it: (description: string, test: () => void) => void;
declare const expect: (actual: unknown) => {
  toBeTruthy(): void;
  toEqual(expected: unknown): void;
  toContain(expected: string): void;
};

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AngularApp2' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularApp2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AngularApp2');
  });
});
