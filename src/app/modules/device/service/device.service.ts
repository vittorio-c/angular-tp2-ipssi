import { Injectable } from '@angular/core';
import { Device } from 'src/app/model/interface/device';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    constructor() { }

    deviceSubject = new Subject<Device[]>();

    private devices: Device[] = [
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

    emitDeviceSubject() {
        // Retourne une COPIE de l'array existant
        this.deviceSubject.next(this.devices.slice());
    }

    switchOffAll(): void {
        this.devices.forEach((device) => {
            this.off(device);
        })
    }

    switchOnAll(): void {
        this.devices.forEach((device) => {
            this.on(device);
        })
    }

    on(device: Device): void {
        this.switch(device, 'on')
    }

    off(device: Device): void {
        this.switch(device, 'off')
    }

    switch(device: Device, status: string): void {
        let objIndex = this.devices.findIndex((obj) => obj.id == device.id);
        this.devices[objIndex].status = status;

        this.emitDeviceSubject();
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
