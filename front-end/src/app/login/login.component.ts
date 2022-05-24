import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    hide: boolean;

    constructor(private authService: AuthServiceService, private router: Router) {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        })

        this.hide = true;
    }

    ngOnInit(): void {

    }

    onLogin() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe({
                next: () => { this.router.navigateByUrl('/courses')},
                error: (result) => { alert(result.error. message) }
            });
        }
    }
}
