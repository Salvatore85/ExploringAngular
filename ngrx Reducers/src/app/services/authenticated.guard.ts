import { Injectable } from "@angular/core";
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
 
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.isAuthenticated()) {
            this.authService.redirectToLogin();
            return false;
        } else {
            return true;
        }
    }
}