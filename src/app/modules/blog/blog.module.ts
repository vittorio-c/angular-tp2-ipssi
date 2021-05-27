import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent  } from './blog/blog.component'
import { PostListComponent  } from './post-list/post-list.component'
import { PostListItemComponent  } from './post-list-item/post-list-item.component'

const routes: Routes = [
    { path: '', component: BlogComponent }
];

@NgModule({
    declarations: [
        PostListComponent,
        PostListItemComponent,
        BlogComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        BlogComponent
    ]
})
export class BlogModule { }
