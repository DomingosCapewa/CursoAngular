import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaMundo } from './ola-mundo';

describe('OlaMundo', () => {
  let component: OlaMundo;
  let fixture: ComponentFixture<OlaMundo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlaMundo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlaMundo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
