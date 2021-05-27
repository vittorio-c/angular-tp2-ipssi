import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAuth: boolean = false;

    constructor() { }

    signIn() {
        return new Promise(
            (resolve, reject) => {
                // TODO call server auth service
                let serverResponse = 'Signed in !';
                // TODO set cookie instead of variable
                if (serverResponse) {
                    setTimeout(
                        () => {
                            this.isAuth = true;
                            resolve(serverResponse);
                        }, 2000
                    );
                } else {
                    reject(serverResponse);
                }
            }
        )
    }

    signOut() {
        return new Promise(
            (resolve, reject) => {
                // TODO call server auth service
                let serverResponse = 'Signed out !';
                if (serverResponse) {
                    setTimeout(
                        () => {
                            this.isAuth = false;
                            resolve(serverResponse);
                        }, 2000
                    );
                } else {
                    reject(serverResponse);
                }
            }
        )
    }
}
