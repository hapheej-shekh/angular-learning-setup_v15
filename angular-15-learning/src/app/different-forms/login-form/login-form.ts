import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/common/local-storage-service';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css']
})
export class LoginForm {

    constructor(private router: Router, private localStorage: LocalStorageService) {}

    user: any = {
        username: '',
        password: '',
        remember: false
    };

    private userDetail: User = new User('', '', false);

    public login(): void {

        if(this.user.username!=null && this.user.username!='')
            this.userDetail.setUsername(this.user.username)

        if(this.user.password!=null && this.user.password!='')
            this.userDetail.setPassword(this.user.password)

        if(this.userDetail.isValidUser()) {
            this.userDetail.rememberMe(this.user.remember);
            this.localStorage.setUserDetail(this.userDetail);
            this.router.navigate(['/default']);
        } else 
            this.router.navigate(['/default']);

        this.user = {
            username: '',
            password: '',
            remember: false
        };
    }

    cancel(): void {

        this.router.navigate(['/login']);
    }
}

export class User {

    private username: String;
    private password: String;
    private remember: boolean;

    constructor(username: String, password: String, remember: boolean) {
        this.username = username;
        this.password = password;
        this.remember = remember;
    }

    public getUsername(): String {

        return this.username;
    }
    public setUsername(username: String): void {

        this.username = username;
    }

    public getPassword(): String {

        return this.password;
    }
    public setPassword(password: String): void {

        this.password = password;
    }

    public isRemembered(): boolean {

        return this.remember;
    }
    public rememberMe(remember: boolean): void {
        
        this.remember = remember;
    }

    public isValidUser(): boolean {

        if(this.username==null && this.username=='')
            return false;

        if(this.password==null || this.password=='')
            return false;

        if(this.remember==null || this.remember==undefined)
            return false;

        return true;
    }
}