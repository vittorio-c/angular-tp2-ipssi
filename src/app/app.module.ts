import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
    {
        path: 'devices',
        loadChildren: () => import('./modules/device/device.module').then(m => m.DeviceModule)
    },
    {
        path: 'blog',
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
