import { Injectable } from '@angular/core';
import { Device } from 'src/app/model/interface/device';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    constructor() { }

    devices: Device[] = [
        {
            id: 1,
            name: 'Washing machine',
            lastRun: '2021/04/12',
            status: 'on'
        },
        {
            id: 2,
            name: 'Drying machine',
            lastRun: '2021/03/16',
            status: 'on'
        },
        {
            id: 3,
            name: 'Vacuum cleaner',
            lastRun: '2021/03/29',
            status: 'off'
        },
        {
            id: 4,
            name: 'Computer',
            lastRun: '2021/05/02',
            status: 'on'
        },
    ]

    switchOnAll(): void {
        this.devices.forEach((device) => {
            device.status = 'on'
        })
    }

    switchOffAll(): void {
        this.devices.forEach((device) => {
            device.status = 'off'
        })
    }
}
