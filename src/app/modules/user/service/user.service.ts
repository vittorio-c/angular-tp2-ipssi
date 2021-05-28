import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User} from 'src/app/model/interface/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }

    userSubject = new Subject<User[]>();

    private users: User[] = [
        {
            id: 1,
            firstName: 'Georges',
            lastName: 'Tafit',
            email: 'georges.tafit@gmail.com',
            drinkPref: 'beers',
            hobbies: ['golf', 'cars']
        },
        {
            id: 2,
            firstName: 'Johana',
            lastName: 'Lemaitre',
            email: 'jojo@gmail.com',
            drinkPref: 'orange juice',
            hobbies: ['swimming', 'piano']

        },
        {
            id: 3,
            firstName: 'Alexandre',
            lastName: 'Balle',
            email: 'alexouill@gmail.com',
            drinkPref: 'whiskey',
            hobbies: ['walking', 'video games']
        }
    ]

    emitUserSubject() {
        // Retourne une COPIE de l'array existant
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUserSubject();
    }

    /* switchOffAll(): void { */
    /*     this.users.forEach((user) => { */
    /*         this.off(user); */
    /*     }) */
    /* } */

    /* switchOnAll(): void { */
    /*     this.users.forEach((user) => { */
    /*         this.on(user); */
    /*     }) */
    /* } */

    /* on(user: User): void { */
    /*     this.switch(user, 'on') */
    /* } */

    /* off(user: User): void { */
    /*     this.switch(user, 'off') */
    /* } */

    /* switch(user: User, status: string): void { */
    /*     let objIndex = this.users.findIndex((obj) => obj.id == user.id); */
    /*     this.users[objIndex].status = status; */

    /*     this.emitUserSubject(); */
    /* } */

    getUserById(id: number) {
        const user = this.users.find(
            (user) => {
                return user.id === id;
            }
        );

        return user;
    }
}
