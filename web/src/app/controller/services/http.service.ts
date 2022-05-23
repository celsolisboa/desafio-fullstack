import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})

export class HttpService {
     apiURL: string = 'http://localhost:5432' //Configurado para maquina do Wesley

    constructor (private http: HttpClient) { }

    get(url: string) {
        return this.http.get(`${this.apiURL}${url}`)
    }
    post(url: string, data: any) {
        return this.http.post(`${this.apiURL}${url}`, data)
    }
    put(url: string, data: any) {
        return this.http.put(`${this.apiURL}${url}`, data)
    }
    remove(url: string) {
        return this.http.delete(`${this.apiURL}${url}`)
    }
}
