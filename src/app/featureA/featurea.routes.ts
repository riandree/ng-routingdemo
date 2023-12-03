import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn, Routes } from '@angular/router';
import { EntryAComponent } from './entry-a/entry-a.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SecuredComponent } from './secured/secured.component';
import { FakeAuthService } from '../shared/fake-auth.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';

/*
   type CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => 
           Observable<boolean | UrlTree> | 
           Promise<boolean | UrlTree>    | 
           boolean | UrlTree;
 */ 
const routeGuard4SecuredComponent : CanActivateFn = () => {
    const fakeAuthService = inject(FakeAuthService);
    const router = inject(Router);
    if (fakeAuthService.authenticated) {
        return true;
    }
    return router.parseUrl('/featurea/forbidden');
}

export const routes: Routes = [
    { 
        path : 'featurea' , component : EntryAComponent, title : "please choose ...", 
        children : [
            { path : "first", component : FirstComponent, title : "First Component", data : { desc : "very important info"} },
            {   
                path : "second", component : SecondComponent, title : "Second Component", 
                resolve : {
                    // "Resolvers" can be used to pre-fetch data before the component that the route navigates to is actually activated.
                    // Since the resolver potentially executes asynchronous aktions like HTTP requests a resolver is a function that
                    // either return a Promise or an Observable.
                    // In this example it takes the "resolver" 2 seconds to come up with the current Date-String. The result is that
                    // after navigating to this route it takes 2 seconds for the "SecondComponent" to be shown. 
                    currentTime : () => { // In a real project this function (of type ResolveFn<T>) should not be implemented here but in it's own file.
                        console.log("entering resolver");
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                // resolver finished
                                resolve(Date());
                            },2000); 
                        });
                    }
                }
            },
            {   
                path : "secure", component : SecuredComponent, 
                canActivate : [routeGuard4SecuredComponent]
            },
            { path : "forbidden", component : ForbiddenComponent, title : "Access rejected" }
        ]
    },
];
