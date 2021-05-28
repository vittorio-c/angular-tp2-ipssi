import { Component, OnInit, OnDestroy } from '@angular/core';
import { Device } from 'src/app/model/interface/device';
import { DeviceService } from '../service/device.service'
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-device-view',
    templateUrl: './device-view.component.html',
    styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit, OnDestroy {

    devices!: Device[];
    deviceSubscription!: Subscription;

    constructor(private service: DeviceService) { }

    ngOnDestroy(): void {
        this.deviceSubscription.unsubscribe();
    }

    ngOnInit(): void {
        // Création de la souscription
        this.deviceSubscription = this.service.deviceSubject.subscribe(
            (devices: Device[]) => {
                this.devices = devices;
            }
        );
        // Appel du premier tick ('next') pour récupérer les devices
        // Toute modification ultérieur de l'array 'devices' dans
        // le service souscrit, modifiera l'array 'devices' des
        // composants y ayant souscrit : on est sur du multicast.
        this.service.emitDeviceSubject();
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
