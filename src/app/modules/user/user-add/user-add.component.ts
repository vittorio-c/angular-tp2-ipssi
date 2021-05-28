import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../service/user.service';
import {User} from 'src/app/model/interface/user';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

    @Input()
    hobbies!: any[];

    @Output()
    userAdded: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private service: UserService) { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        // TODO validate data
        console.log(form.value)

        let user: User = {
            id: 6, // TODO dynamic
            firstName: form.value['firstName'],
            lastName: form.value['lastName'],
            email: form.value['email'],
            drinkPref: form.value['drinkPref'],
            hobbies: form.value['hobbies'] // TODO loop on array when inserting
        }

        this.service.addUser(user);
        this.userAdded.emit(true);
    }
}
