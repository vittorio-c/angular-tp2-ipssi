import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DeviceService } from '../service/device.service';

@Component({
    selector: 'app-single-device',
    templateUrl: './single-device.component.html',
    styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {
    id!: number;
    device!: any;

    constructor(private route: ActivatedRoute, private service: DeviceService, private router: Router) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id']
        this.device = this.service.getDeviceById(+this.id);

        if (undefined === this.device) {
            this.router.navigate(['not-found']);
        }
    }
}
