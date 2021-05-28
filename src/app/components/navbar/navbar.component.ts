import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    secondes!: number;
    subscription!: Subscription;

    constructor() { }

    ngOnInit(): void {
        const counter = interval(1000);
        this.subscription = counter.subscribe(
            (value) => {
                this.secondes = value;
            },
            (error) => {
                console.error('Error in Observable response');
            },
            () => {
                console.log('Observable completed')
            }
        )
    }
}
