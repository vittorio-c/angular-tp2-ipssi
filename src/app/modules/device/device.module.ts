import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component'
import { DeviceViewComponent } from './device-view/device-view.component';
import { SingleDeviceComponent } from './single-device/single-device.component'

const routes: Routes = [
    { path: '', component: DeviceViewComponent },
    { path: ':id', component: SingleDeviceComponent },
];

@NgModule({
    declarations: [
        DeviceComponent,
        DeviceViewComponent,
        SingleDeviceComponent
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
