import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTestInnerComponent } from './comp-test-inner.component';

describe('CompTestInnerComponent', () => {
  let component: CompTestInnerComponent;
  let fixture: ComponentFixture<CompTestInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTestInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTestInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
