import { Component, OnInit, Input } from '@angular/core';
import {Post} from 'src/app/model/interface/post';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input()
    post!: Post;

    constructor() { }

    ngOnInit(): void {
        color: "#FFF";
    }

    loveIt(): void {
        this.post.loveIts += 1
    }

    hateIt(): void {
        this.post.hateIts += 1
    }
}
