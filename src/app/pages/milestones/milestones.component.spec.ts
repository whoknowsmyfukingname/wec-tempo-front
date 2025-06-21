import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonesComponent } from './milestones.component';
import { Milestone, FeatType, Status } from './interfaces/milestones.interface';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const mockMilestones: Milestone[] = [
      {
        position: 0,
        status: Status.DEVELOP,
        title: 'mile_1',
        features: [
          {
            title: 'feat_1',
            status: Status.DEVELOP,
            type: FeatType.BACKEND,
            tasks: [
              {
                status: Status.DEVELOP,
                title: 'task_1'
              },
              {
                status: Status.DONE,
                title: 'task_1'
              }
            ]
          },
          {
            title: 'feat_2',
            status: Status.DEVELOP,
            type: FeatType.BACKEND,
            tasks: [
              {
                status: Status.DEVELOP,
                title: 'task_3'
              },
              {
                status: Status.DEVELOP,
                title: 'task_4'
              }
            ]
          }
        ]
      }
    ]

describe('MilestonesComponent', () => {
  let component: MilestonesComponent;
  let fixture: ComponentFixture<MilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestonesComponent],
      providers: [
        provideRouter([]),
        provideAnimationsAsync()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getProgress for milestone 0 and return done percentaje', () => {
    component.milestones = mockMilestones;
    expect(component.getProgress(0)).toEqual(25);
  })
});
