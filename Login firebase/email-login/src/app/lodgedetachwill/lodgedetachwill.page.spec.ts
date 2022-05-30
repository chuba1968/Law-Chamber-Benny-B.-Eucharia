import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LodgedetachwillPage } from './lodgedetachwill.page';

describe('LodgedetachwillPage', () => {
  let component: LodgedetachwillPage;
  let fixture: ComponentFixture<LodgedetachwillPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgedetachwillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LodgedetachwillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
