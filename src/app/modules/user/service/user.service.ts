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

    hobbies: any[] = [
        {
            slug: 'watch-tv',
            name: 'Watching television'
        },
        {
            slug: 'running',
            name: 'Running'
        },
        {
            slug: 'sleeping',
            name: 'Sleeping',
        }
    ]

    emitUserSubject() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUserSubject();
    }

    getUserById(id: number) {
        const user = this.users.find(
            (user) => {
                return user.id === id;
            }
        );

        return user;
    }
}
