import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServiceHttpComponent } from './test-service-http.component';

describe('TestServiceHttpComponent', () => {
  let component: TestServiceHttpComponent;
  let fixture: ComponentFixture<TestServiceHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestServiceHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServiceHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
