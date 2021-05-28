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
            status: 'on',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/LGwashingmachine.jpg'
        },
        {
            id: 2,
            name: 'Drying machine',
            lastRun: '2021/03/16',
            status: 'on',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Clothes_Dryer.jpg'
        },
        {
            id: 3,
            name: 'Vacuum cleaner',
            lastRun: '2021/03/29',
            status: 'off',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Vacuum_cleaner.jpg'
        },
        {
            id: 4,
            name: 'Computer',
            lastRun: '2021/05/02',
            status: 'on',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Crystal_Project_computer.png'
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

    getDeviceById(id: number) {
        const device = this.devices.find(
            (device) => {
                return device.id === id;
            }
        );

        return device;
    }
}
