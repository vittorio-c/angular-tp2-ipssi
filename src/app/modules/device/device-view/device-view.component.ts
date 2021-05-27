import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/model/interface/device';
import { DeviceService } from '../service/device.service'

@Component({
    selector: 'app-device-view',
    templateUrl: './device-view.component.html',
    styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

    service: DeviceService;
    devices!: Device[];

    constructor(service: DeviceService) {
        this.service = service;
    }

    ngOnInit(): void {
        this.devices = this.service.devices;
    }

    switchOnAll(): void {
        this.service.switchOnAll();
    }

    switchOffAll(): void {
        if (confirm('Are you sure ?')) {
            this.service.switchOffAll();
        }
    }
}
