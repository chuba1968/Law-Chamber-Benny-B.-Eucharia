import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProceedbusinesnamePage } from './proceedbusinesname.page';

describe('ProceedbusinesnamePage', () => {
  let component: ProceedbusinesnamePage;
  let fixture: ComponentFixture<ProceedbusinesnamePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceedbusinesnamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProceedbusinesnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
