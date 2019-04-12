import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServiceDetailComponent } from './test-service-detail.component';

describe('TestServiceDetailComponent', () => {
  let component: TestServiceDetailComponent;
  let fixture: ComponentFixture<TestServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
