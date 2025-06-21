import { Routes } from '@angular/router';
import { TempoComponent } from './pages/tempo/tempo.component';
import { MilestonesComponent } from './pages/milestones/milestones.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'milestones'
    },
    {
        path: 'milestones',
        component: MilestonesComponent
    },
    {
        path: 'tempo',
        component: TempoComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
