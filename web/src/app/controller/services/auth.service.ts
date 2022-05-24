import { EventEmitter, Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "./http.service";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    

    showMenuEmmiter = new EventEmitter<boolean>()

    constructor(private router: Router, private httpService: HttpService) {}
     login(user: User) {
        this.httpService.get('/auth/signin').
        subscribe({
            next: (data: any) => {
                localStorage.setItem('token', data.response);
                localStorage.setItem('loggedin', 'true');
                
                this.showMenuEmmiter.emit(true);
                this.router.navigate(['/courses'])
            },
            error: (error) => console.log(error)
        })
    }
}