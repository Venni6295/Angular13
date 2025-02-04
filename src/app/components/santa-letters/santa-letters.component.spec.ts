import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaLettersComponent } from './santa-letters.component';

describe('SantaLettersComponent', () => {
  let component: SantaLettersComponent;
  let fixture: ComponentFixture<SantaLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantaLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
