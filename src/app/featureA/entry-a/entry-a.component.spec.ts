import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAComponent } from './entry-a.component';

describe('EntryAComponent', () => {
  let component: EntryAComponent;
  let fixture: ComponentFixture<EntryAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntryAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
