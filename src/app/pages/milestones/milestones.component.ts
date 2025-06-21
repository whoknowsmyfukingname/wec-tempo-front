import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule } from 'primeng/progressbar';
import { FeatType, Milestone, Status } from './interfaces/milestones.interface';
import { CardModule } from 'primeng/card';
import { CommonModule, DatePipe } from '@angular/common';
import { milestones } from './constants/milestones';

@Component({
  selector: 'app-milestones',
  imports: [AccordionModule, ProgressBarModule, CardModule, CommonModule, DatePipe],
  templateUrl: './milestones.component.html',
  styleUrl: './milestones.component.scss'
})
export class MilestonesComponent {
  /* milestones are hardcoded, problem? */
  milestones: Milestone[] = milestones;

  get featTypeDatabase(): FeatType {
    return FeatType.DATABASE;
  }

  get featTypeFront(): FeatType {
    return FeatType.FRONTEND;
  }

  get featTypeBack(): FeatType {
    return FeatType.BACKEND;
  }

  get completedStatus(): Status {
    return Status.DONE;
  }

  getProgress(position: number): number {
    const milestone = this.milestones.at(position);
    let totalCount = 0, completedCount = 0;
    milestone?.features.forEach(feat => {
      feat.tasks.forEach(task => {
        if (task.status !== Status.DROPPED) {
          totalCount ++;
        }
        if (task.status === Status.DONE) {
          completedCount ++;
        }
      })
    });

    return Math.trunc(100 * completedCount / totalCount);
  }
}
