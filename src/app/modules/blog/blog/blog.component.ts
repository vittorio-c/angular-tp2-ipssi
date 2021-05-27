import { Component, OnInit } from '@angular/core';
import {Post} from 'src/app/model/interface/post';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    date = new Date;

    posts: Post[] = [
        {title: "Angular", content: "Un framework", loveIts: 0, hateIts: 0, created_at: this.date},
        {title: "HTML/CSS", content: "Un template, des divs et beaucoup de lignes", loveIts: 0, hateIts: 0, created_at: this.date},
        {title: "TypeScript", content: "Les possibles de l'impossible", loveIts: 0, hateIts: 0, created_at: this.date}
    ]
}
