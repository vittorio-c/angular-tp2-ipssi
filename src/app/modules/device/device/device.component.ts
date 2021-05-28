import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

    @Input()
    deviceName!: string;

    @Input()
    deviceStatus!: string;

    @Input()
    lastRun!: string;

    @Input()
    deviceId!: number;

    constructor() { }

    ngOnInit(): void {
    }

    on(): void {
        this.switch('on')
    }

    off(): void {
        this.switch('off')
    }

    switch(status: string): void {
        this.deviceStatus = status
    }
}
