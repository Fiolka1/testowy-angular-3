import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RakiComponent } from './raki.component';

describe('RakiComponent', () => {
  let component: RakiComponent;
  let fixture: ComponentFixture<RakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RakiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
