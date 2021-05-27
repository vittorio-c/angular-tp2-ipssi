import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device/device.component'
import { DeviceViewComponent } from './device-view/device-view.component'

@NgModule({
    declarations: [
        DeviceComponent,
        DeviceViewComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DeviceComponent
    ]
})
export class DeviceModule { }
