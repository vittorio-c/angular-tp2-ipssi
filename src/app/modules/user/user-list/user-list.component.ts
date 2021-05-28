import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {User} from 'src/app/model/interface/user';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

    users!: User[];
    userSubscription!: Subscription;

    constructor(private service: UserService) { }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.userSubscription = this.service.userSubject.subscribe(
            (users: User[]) => {
                this.users = users;
            }
        );

        this.service.emitUserSubject();
    }
}
