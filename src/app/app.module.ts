import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AuthComponent } from './components/auth/auth.component';
import {AuthGuard} from './services/guard/guard';

const appRoutes: Routes = [
    {
        path: 'devices',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/device/device.module').then(m => m.DeviceModule)
    },
    {
        path: 'blog',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
    },
    {
        path: 'not-found',
        component: FourOhFourComponent
    },
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: '**',
        redirectTo: 'not-found'
    },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FourOhFourComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
