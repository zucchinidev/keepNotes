/* tslint:disable:no-unused-variable */
import {AppRootComponent} from './app-root.component';

import {TestBed} from '@angular/core/testing';

import {By} from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AppRootComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(AppRootComponent);
    expect(fixture.componentInstance instanceof AppRootComponent).toBe(true, 'should create AppComponent');
  });

  it('should have expected <h1> text', () => {
    let fixture = TestBed.createComponent(AppRootComponent);
    fixture.detectChanges();

    let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

    h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

    expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
  });
});
