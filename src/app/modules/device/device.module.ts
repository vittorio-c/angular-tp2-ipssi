import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component'
import { DeviceViewComponent } from './device-view/device-view.component'

const routes: Routes = [
    { path: '', component: DeviceViewComponent }
];

@NgModule({
    declarations: [
        DeviceComponent,
        DeviceViewComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        DeviceViewComponent
    ]
})
export class DeviceModule { }
