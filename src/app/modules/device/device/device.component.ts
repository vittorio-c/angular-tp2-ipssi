import { Component, OnInit, Input } from '@angular/core';
import {Device} from 'src/app/model/interface/device';
import {DeviceService} from '../service/device.service';

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

    /* @Input() */
    /* deviceName!: string; */

    /* @Input() */
    /* deviceStatus!: string; */

    /* @Input() */
    /* lastRun!: string; */

    /* @Input() */
    /* deviceId!: number; */
    @Input()
    device!: Device;

    constructor(private service: DeviceService) { }

    ngOnInit(): void {
    }

    on(): void {
        this.service.on(this.device);
    }

    off(): void {
        this.service.off(this.device);
    }
}
