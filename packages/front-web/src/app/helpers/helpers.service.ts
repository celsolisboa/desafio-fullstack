import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})

export class Helpers {
    getCurrentPathName(): string {
        return window.location.pathname
    }
}