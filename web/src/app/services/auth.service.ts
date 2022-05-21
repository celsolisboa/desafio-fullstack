import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
@Injectable({ 
    providedIn: 'root'
})
    export class AuthService {
        constructor(private http: HttpClient) { }
        login(data: { email: any; password: any }) {
            return this.http.post(`${environment.baseUrl}/auth/login`,{ ...data }).toPromise()
        }
    }
