import { Component, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-header',
  imports: [AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private appService = inject(AppService);

  onChangeTab(tab: 'tempo' | 'milestones') {
    this.appService.changeTab(tab);
  }
}
