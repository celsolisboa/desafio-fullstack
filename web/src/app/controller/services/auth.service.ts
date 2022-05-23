import { EventEmitter, Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "./http.service";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    userAuthenticated: boolean = true;

    showMenuEmmiter = new EventEmitter<boolean>()

    constructor(private router: Router, private httpService: HttpService) {}
     login(user: User) {
        this.httpService.post('/auth/signin', user).
        subscribe({
            next: (data: any) => {
                localStorage.setItem('token', data.response);
                localStorage.setItem('loggedin', 'true');
                this.userAuthenticated = true;
                this.showMenuEmmiter.emit(true);
                this.router.navigate(['/courses'])
            },
            error: (error) => console.log(error)
        })
    }
}