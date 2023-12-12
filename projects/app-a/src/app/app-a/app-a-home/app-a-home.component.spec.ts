import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAHomeComponent } from './app-a-home.component';

describe('AppAHomeComponent', () => {
  let component: AppAHomeComponent;
  let fixture: ComponentFixture<AppAHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
