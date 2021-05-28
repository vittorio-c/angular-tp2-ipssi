import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input()
    open: boolean = false;

    @Output()
    modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {
    }

    openModal() {
        this.open = true;
    }

    closeModal() {
        this.open = false;
        this.modalClosed.emit(false);
    }
}
