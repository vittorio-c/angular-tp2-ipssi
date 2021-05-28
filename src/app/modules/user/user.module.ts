import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { ModalComponent } from 'src/app/components/modal/modal.component'
import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: UserListComponent }
];

@NgModule({
    declarations: [
        UserListComponent,
        UserComponent,
        UserAddComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule
    ]
})
export class UserModule { }
