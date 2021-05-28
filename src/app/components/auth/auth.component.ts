import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router'

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    service: AuthService;
    authStatus!: boolean;
    router: Router;
    loading: boolean = false;

    constructor(service: AuthService, router: Router) {
        this.service = service;
        this.router = router;
    }

    ngOnInit(): void {
    }

    onSignIn() {
        this.loading = true;
        this.service.signIn().then(
            (success) => {
                console.log(success);
                this.authStatus = this.service.isAuth;
                this.loading = false;
                this.router.navigate(['']);
            },

            (failure) => {
                this.loading = false;
                console.error(failure)
            }
        )
    }

    onSignOut() {
        this.loading = true;
        this.service.signOut().then(
            (success) => {
                console.log(success);
                this.loading = false;
                this.authStatus = this.service.isAuth;
                this.router.navigate(['']);
            },

            (failure) => {
                this.loading = false;
                console.error(failure)
            }
        )
    }
}
