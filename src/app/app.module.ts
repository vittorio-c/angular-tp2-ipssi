import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FourOhFourComponent } from './component/four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
    {
        path: 'devices',
        loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
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
    HomeComponent,
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
