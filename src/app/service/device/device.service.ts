import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    constructor() { }

    public devices = [
        {
            id: 1,
            name: 'Washing machine',
            status: 'on'
        },
        {
            id: 2,
            name: 'Drying machine',
            status: 'on'
        },
        {
            id: 3,
            name: 'Vacuum cleaner',
            status: 'off'
        },
        {
            id: 4,
            name: 'Computer',
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
