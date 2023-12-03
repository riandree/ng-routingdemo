import { Routes } from '@angular/router';
import { BaComponent } from './ba/ba.component';
import { BbComponent } from './bb/bb.component';

export const routes: Routes = [
    { path : 'featureb' , redirectTo : 'featureb/a', pathMatch : 'full' },
    { path : 'featureb/a' , component : BaComponent, title : "BBBBBB" },
    { path : 'featureb/b' , component : BbComponent, title : "AAAAAA" }
];
