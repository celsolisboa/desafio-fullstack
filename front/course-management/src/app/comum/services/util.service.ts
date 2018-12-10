import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(private snackBar: MatSnackBar, ) { }

    sendMessageError(error: string) {
        this.snackBar.open("Ocorreu um erro! " + error, "", {
            duration: 2000,
            panelClass: ["snackBarError"],
        })
    }

    sendMessageSuccess(msgSucesso: string) {
        this.snackBar.open("Sucesso! " + msgSucesso, "", {
            duration: 2000,
            panelClass: ["snackBarSucesso"],
        });
    }

}
