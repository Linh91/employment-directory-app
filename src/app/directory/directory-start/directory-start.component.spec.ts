import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryStartComponent } from './directory-start.component';

describe('DirectoryStartComponent', () => {
  let component: DirectoryStartComponent;
  let fixture: ComponentFixture<DirectoryStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
