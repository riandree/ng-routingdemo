import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { routes as aroutes } from './featureA/featurea.routes';
import { routes as broutes } from './featureB/featureb.routes';

export const routes: Routes = [
    { path : '' , redirectTo : 'home', pathMatch : 'full' },
    { path : 'home' , component : HomeComponent, title : "Home sweet home" },
    ...aroutes,
    ...broutes,
    // The order of routes is important as angular tests each of the routes in turn until one
    // matches. Since this route is the "wildcard" route that matches all paths it has to be
    // the last route because otherwise it would effectively disable all routes following after it.
    { path : '**' , component : NotFoundComponent, title : "Error. Page not found." }
];
