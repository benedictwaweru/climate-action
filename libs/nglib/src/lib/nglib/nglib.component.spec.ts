import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NglibComponent } from './nglib.component';

describe('NglibComponent', () => {
  let component: NglibComponent;
  let fixture: ComponentFixture<NglibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NglibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NglibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
