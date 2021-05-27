import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { NavbarComponent } from './component/navbar/navbar.component';
/* import { DeviceComponent } from './component/device/device.component'; */
/* import { DeviceViewComponent } from './component/device-view/device-view.component'; */
import { FourOhFourComponent } from './component/four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
    {
        path: 'devices',
        loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)
    },
    /* { */
    /*     path: 'devices/:id', */
    /*     component: DeviceComponent */
    /* }, */
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'not-found',
        component: FourOhFourComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    },
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
