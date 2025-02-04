import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekingGiftComponent } from './seeking-gift.component';

describe('SeekingGiftComponent', () => {
  let component: SeekingGiftComponent;
  let fixture: ComponentFixture<SeekingGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekingGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekingGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
