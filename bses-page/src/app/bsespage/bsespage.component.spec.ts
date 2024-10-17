import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSESPageComponent } from './bsespage.component';

describe('BSESPageComponent', () => {
  let component: BSESPageComponent;
  let fixture: ComponentFixture<BSESPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BSESPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BSESPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
